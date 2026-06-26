document.addEventListener("DOMContentLoaded", () => {
  setActiveMenu();
  setGreeting();
  filterProjects();
  validateForm();
});

function setActiveMenu() {
  const page = document.body.dataset.page;
  document.querySelectorAll(".nav-link").forEach(link => {
    link.classList.toggle("active", link.dataset.nav === page);
  });
}

function setGreeting() {
  const greeting = document.querySelector("#greeting");
  if (!greeting) return;

  const hour = new Date().getHours();
  greeting.textContent =
    hour < 12 ? "Bom dia!" :
    hour < 18 ? "Boa tarde!" :
    "Boa noite!";
}

function filterProjects() {
  const buttons = document.querySelectorAll(".filters button");
  const cards = document.querySelectorAll(".project-card");
  const empty = document.querySelector("#emptyMessage");

  if (!buttons.length) return;

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;
      let visible = 0;

      buttons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      cards.forEach(card => {
        const show =
          filter === "todos" ||
          card.dataset.category.split(" ").includes(filter);

        card.classList.toggle("hidden", !show);
        if (show) visible++;
      });

      empty.hidden = visible > 0;
    });
  });
}

function validateForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  const fields = {
    name: document.querySelector("#name"),
    email: document.querySelector("#email"),
    subject: document.querySelector("#subject"),
    message: document.querySelector("#message")
  };

  const count = document.querySelector("#characterCount");
  const status = document.querySelector("#formStatus");

  fields.message.addEventListener("input", () => {
    count.textContent = `${fields.message.value.length} / 500`;
  });

  form.addEventListener("submit", event => {
    event.preventDefault();

    const tests = {
      name: fields.name.value.trim().length >= 3,
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.value),
      subject: fields.subject.value !== "",
      message: fields.message.value.trim().length >= 10
    };

    const messages = {
      name: "Digite pelo menos 3 caracteres.",
      email: "Digite um e-mail válido.",
      subject: "Selecione um assunto.",
      message: "Digite pelo menos 10 caracteres."
    };

    Object.keys(fields).forEach(key => {
      fields[key].classList.toggle("input-error", !tests[key]);
      document.querySelector(`#${key}Error`).textContent =
        tests[key] ? "" : messages[key];
    });

    if (!Object.values(tests).every(Boolean)) {
      status.textContent = "Revise os campos destacados.";
      status.style.color = "var(--danger)";
      return;
    }

    status.textContent = "Mensagem validada. Envie para contato@joaocolix.dev.";
    status.style.color = "var(--success)";
    form.reset();
    count.textContent = "0 / 500";
  });
}
