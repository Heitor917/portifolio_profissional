
const ano = document.getElementById("ano");
const currentYear = document.getElementById("currentYear");

if (ano) {
  ano.textContent = new Date().getFullYear();
}

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });
  },
  {
    threshold: 0.1
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


const skillBars = document.querySelectorAll(".skill-bar span");

skillBars.forEach((bar) => {

  const width = bar.getAttribute("data-width");

  if (width) {
    bar.style.width = width;
  }

});

const temaBtn = document.getElementById("temaBtn");
const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "claro") {
  document.body.classList.add("light");
  temaBtn.textContent = "☾";
}

temaBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")) {
    localStorage.setItem("tema", "claro");
    temaBtn.textContent = "☾";
  } else {
    localStorage.setItem("tema", "escuro");
    temaBtn.textContent = "☀";
  }
});

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let atual = "inicio";

  sections.forEach((section) => {

    if (window.scrollY >= section.offsetTop - 150) {
      atual = section.id;
    }

  });

  links.forEach((link) => {

    if (link.getAttribute("href") === "#" + atual) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }

  });

});

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinksItems = document.querySelectorAll(".nav-links a");

if (menuToggle && navLinks) {

  menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("open");

    const menuAberto = navLinks.classList.contains("open");

    menuToggle.setAttribute(
      "aria-expanded",
      menuAberto
    );

  });

  navLinksItems.forEach((link) => {

    link.addEventListener("click", () => {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

  document.addEventListener("click", (event) => {

    const clicouNoMenu =
      navLinks.contains(event.target);

    const clicouNoBotao =
      menuToggle.contains(event.target);

    if (!clicouNoMenu && !clicouNoBotao) {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

  window.addEventListener("resize", () => {

    if (window.innerWidth > 650) {

      navLinks.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}

const form =
  document.getElementById("formContato") ||
  document.getElementById("contactForm");

const status =
  document.getElementById("status") ||
  document.getElementById("formStatus");

if (form) {

  form.addEventListener("submit", function(event) {

    event.preventDefault();

    if (status) {
      status.textContent =
        "Mensagem validada. Para envio real, conecte o formulário a um serviço de e-mail.";
    }

    form.reset();

  });

}
const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {

  let numero = telefone.value.replace(/\D/g, "");

  if (numero.length <= 2) {
    telefone.value = numero;
  }

  else if (numero.length <= 7) {
    telefone.value =
      "(" + numero.substring(0, 2) + ") " +
      numero.substring(2);
  }

  else {
    telefone.value =
      "(" + numero.substring(0, 2) + ") " +
      numero.substring(2, 7) + "-" +
      numero.substring(7, 11);
  }

});


const hoverStyle = document.createElement("style");

hoverStyle.textContent = `

  .profile-card,
  .profile-card:hover,
  .scanner-card,
  .scanner-card:hover {
    transform: none !important;
  }


  /* Remove animação e mudança de borda do Sobre mim */

  .about-grid .card,
  .about-grid .card:hover,
  .about-grid .glass-card,
  .about-grid .glass-card:hover {

    transform: none !important;

    border-color: #12485b !important;

  }

`;


document.head.appendChild(hoverStyle);