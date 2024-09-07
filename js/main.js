// Criando um evento que utiliza-se do ID do botão para abrir e fechar o menu lateral
document.getElementById("abrir-menu").addEventListener("click", () => {
  const menuLateral = document.getElementById("menu-lateral");
  const conteudo = document.querySelector("main");
  const footer = document.querySelector("footer");
  if (menuLateral.classList.contains("-translate-x-full")) {
    menuLateral.classList.remove("-translate-x-full");
    menuLateral.classList.add("translate-x-0");
    conteudo.classList.add("brightness-50");
    footer.classList.add("brightness-50");
  } else {
    menuLateral.classList.remove("translate-x-0");
    conteudo.classList.remove("brightness-50");
    footer.classList.remove("brightness-50");
    menuLateral.classList.add("-translate-x-full");
  }
});
