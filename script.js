const projetos = [
  {
    nome: "Portfólio Pessoal",
    descricao: "Site de portfólio feito com HTML, CSS e JavaScript.",
    link: "#"
  },
  {
    nome: "Landing Page",
    descricao: "Página moderna responsiva para apresentação.",
    link: "#"
  },
  {
    nome: "Projeto React",
    descricao: "Aplicação usando componentes e renderização dinâmica.",
    link: "#"
  }
];

const lista = document.getElementById("lista-projetos");

projetos.forEach((projeto) => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${projeto.nome}</h3>
    <p>${projeto.descricao}</p>
    <a href="${projeto.link}" target="_blank">Ver projeto →</a>
  `;

  lista.appendChild(div);
});

/* ANIMAÇÃO DOS CARDS E SEÇÕES */
const elementosReveal = document.querySelectorAll(".projeto, .reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("mostrar");
    }
  });
}, {
  threshold: 0.15
});

elementosReveal.forEach((elemento) => {
  observer.observe(elemento);
});

/* BOTÃO VOLTAR AO TOPO */
const botaoTopo = document.getElementById("topo");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    botaoTopo.style.display = "block";
  } else {
    botaoTopo.style.display = "none";
  }
});

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* HEADER MUDA AO ROLAR */
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("ativo");
  } else {
    header.classList.remove("ativo");
  }
});