const projetos = [
  {
    nome: "Lista de Repositórios (GitHub)",
    descricao: "Página do meu GitHub com todos os meus repositórios publicados.",
    link: "https://github.com/dianasouzabsb-source"
  },
  {
    nome: "Portfólio Publicado",
    descricao: "Versão online do meu portfólio publicada com GitHub Pages.",
    link: "https://dianasouzabsb-source.github.io/portf-lio/"
  },
  {
    nome: "Portfólio React",
    descricao: "Nova versão do meu portfólio desenvolvida com React e publicada na Vercel.",
    link: "https://portfolio-react-4npk8pmox-diana-milanes-souzas-projects.vercel.app/"
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

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.classList.add("ativo");
  } else {
    header.classList.remove("ativo");
  }
});
