const menuLateral = document.getElementById("menu-lateral"); // Pegando o ID de menu-lateral no HTMl
const iluminacao = document.querySelectorAll(`[data-brightness]`); // Selecionando todas as instâncias de data-brightness no HTML
const modalIluminacao = document.querySelectorAll(`[data-modal-brightness]`); // Selecionando todas as instâncias de data-modal-brightness no HTML
const createModal = document.getElementById("create-modal"); // Pegando o ID de create-modal no HTMl
const updateModal = document.getElementById("update-modal"); // Pegando o ID de update-modal no HTMl
const deleteModal = document.getElementById("delete-modal"); // Pegando o ID de delete-modal no HTMl

// Criando um evento que utiliza-se do ID do botão para abrir e fechar o menu lateral
if (document.getElementById("abrir-menu")) {
  document.getElementById("abrir-menu").addEventListener("click", () => {
    if (menuLateral.classList.contains("-translate-x-full")) {
      menuLateral.classList.remove("-translate-x-full");
      menuLateral.classList.add("translate-x-0");
      iluminacao.forEach((e) => {
        e.classList.add("brightness-50");
      });
      modalIluminacao.forEach((e) => {
        e.classList.add("brightness-50");
      });
    } else {
      menuLateral.classList.remove("translate-x-0");
      iluminacao.forEach((e) => {
        e.classList.remove("brightness-50");
      });
      modalIluminacao.forEach((e) => {
        e.classList.remove("brightness-50");
      });
      menuLateral.classList.add("-translate-x-full");
    }
  });
}
// Criando um evento que utiliza-se do ID do botão para abrir a janela do create
if (document.getElementById("abrir-create")) {
  document.getElementById("abrir-create").addEventListener("click", () => {
    if (createModal.classList.contains("hidden")) {
      createModal.classList.remove("hidden");
      iluminacao.forEach((e) => {
        e.classList.add("brightness-50");
      });
    }
  });
}

// Criando um evento que utiliza-se do ID do botão para fechar a janela do create
if (document.getElementById("fechar-create")) {
  document.getElementById("fechar-create").addEventListener("click", () => {
    if (!createModal.classList.contains("hidden")) {
      createModal.classList.add("hidden");
      iluminacao.forEach((e) => {
        e.classList.remove("brightness-50");
      });
    }
  });
}

// Criando um evento que utiliza-se do ID do botão para abrir a janela do update
if (document.getElementById("abrir-update")) {
  document.getElementById("abrir-update").addEventListener("click", () => {
    if (updateModal.classList.contains("hidden")) {
      updateModal.classList.remove("hidden");
      iluminacao.forEach((e) => {
        e.classList.add("brightness-50");
      });
    }
  });
}

// Criando um evento que utiliza-se do ID do botão para fechar a janela do update
if (document.getElementById("fechar-update")) {
  document.getElementById("fechar-update").addEventListener("click", () => {
    if (!updateModal.classList.contains("hidden")) {
      updateModal.classList.add("hidden");
      iluminacao.forEach((e) => {
        e.classList.remove("brightness-50");
      });
    }
  });
}

// Criando um evento que utiliza-se do ID do botão para abrir a janela do delete
if (document.getElementById("abrir-delete")) {
  document.getElementById("abrir-delete").addEventListener("click", () => {
    if (deleteModal.classList.contains("hidden")) {
      deleteModal.classList.remove("hidden");
      iluminacao.forEach((e) => {
        e.classList.add("brightness-50");
      });
    }
  });
}

// Criando um evento que utiliza-se do ID do botão para fechar a janela do delete
if (document.getElementById("fechar-delete")) {
  document.getElementById("fechar-delete").addEventListener("click", () => {
    if (!deleteModal.classList.contains("hidden")) {
      deleteModal.classList.add("hidden");
      iluminacao.forEach((e) => {
        e.classList.remove("brightness-50");
      });
    }
  });
}

// Criando um evento que utiliza-se do ID da seção para gerar um gráfico
if (document.getElementById("qualidade-individual")) {
  document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("qualidade-individual");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["CAMA", "TOALHA", "ROUPA DE CAMA", "LOREM", "WOW", "GG"],
        datasets: [
          {
            data: [85, 70, 90, 10, 20, 55.5],
            backgroundColor: ["rgb(249, 115, 22)", "rgb(217, 119, 6)"],
          },
        ],
      },
      options: {
        indexAxis: "y",
        scales: {
          x: {
            beginAtZero: true,
            max: 100,
            title: {
              display: true,
              text: "PORCENTAGEM",
            },
            grid: {
              color: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(0, 0, 0, 0.2)",
              borderDash: [5, 5],
            },
          },
          y: {
            title: {
              display: true,
              text: "PRODUTOS",
            },
          },
        },

        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  });
}

// Criando um evento que utiliza-se do ID da seção para gerar um gráfico
if (document.getElementById("qualidade-geral")) {
  document.addEventListener("DOMContentLoaded", () => {
    const ctx = document.getElementById("qualidade-geral");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["PERFEITO", "BOM", "MÉDIO", "RUIM", "PÉSSIMO"],
        datasets: [
          {
            data: [15, 15, 15, 15, 15],
            backgroundColor: [
              "rgb(0, 128, 0)",
              "rgb(50, 205, 50)",
              "rgb(255, 215, 0)",
              "rgb(255, 69, 0)",
              "rgb(255, 0, 0)",
            ],
            hoverOffset: 4,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  });
}
