// Criando um evento que utiliza-se do ID do botão para abrir e fechar o menu lateral
document.getElementById("abrir-menu").addEventListener("click", () => {
  const menuLateral = document.querySelector("header");
  if (menuLateral.classList.contains("-translate-x-full")) {
    menuLateral.classList.remove("-translate-x-full");
    menuLateral.classList.add("translate-x-0");
  } else {
    menuLateral.classList.remove("translate-x-0");
    menuLateral.classList.add("-translate-x-full");
  }
});
