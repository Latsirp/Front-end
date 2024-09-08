const menuLateral = document.getElementById("menu-lateral"); // Pegando o ID de menu-lateral no HTMl
const iluminacao = document.querySelectorAll(`[data-brightness]`); // Selecionando todas as instâncias de data-brightness no HTML
const voltarTopo = document.getElementById("voltar-topo"); // Pegando o ID de voltar-topo no HTML
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

// Criando um evento que utiliza-se do ID do botão para voltar ao topo da página
if (document.getElementById("voltar-topo")) {
  window.onscroll = function () {
    scrollar();
  };
  function scrollar() {
    if (
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20
    ) {
      voltarTopo.classList.remove("hidden");
      voltarTopo.classList.add("block");
    } else {
      voltarTopo.classList.remove("block");
      voltarTopo.classList.add("hidden");
    }
  }
  voltarTopo.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
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
            backgroundColor: ["rgb(254, 215, 170)", "rgb(253, 186, 116)"],
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
              text: "PORCENTAGEM (%)",
            },
            grid: {
              color: "rgba(255, 237, 213, 0.1)",
              borderColor: "rgba(255, 237, 213, 0.2)",
              borderDash: [5, 5],
            },
          },
          y: {
            grid: {
              color: "rgba(255, 237, 213, 0.1)",
              borderColor: "rgba(255, 237, 213, 0.2)",
              borderDash: [5, 5],
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
      type: "pie",
      data: {
        labels: ["PERFEITO", "BOM", "MÉDIO", "RUIM", "PÉSSIMO"],
        datasets: [
          {
            data: [15, 15, 15, 15, 15],
            backgroundColor: [
              "rgb(34, 197, 94)",
              "rgb(132, 204, 22)",
              "rgb(234, 179, 8)",
              "rgb(249, 115, 22)",
              "rgb(239, 68, 68)",
            ],
            borderColor: "rgba(0, 0, 0, 0.5)",
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
