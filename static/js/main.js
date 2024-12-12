function toggleMobileMenu() {
  const sidebar = document.getElementById("mobile-sidebar");
  const overlay = document.getElementById("mobile-overlay");

  sidebar.classList.toggle("mobile-open");
  overlay.classList.toggle("active");
}

function closeMobileMenu() {
  const sidebar = document.getElementById("mobile-sidebar");
  const overlay = document.getElementById("mobile-overlay");

  sidebar.classList.remove("mobile-open");
  overlay.classList.remove("active");
}

// Close mobile menu when clicking outside or on a menu item
document.addEventListener("click", function (event) {
  const sidebar = document.getElementById("mobile-sidebar");
  const overlay = document.getElementById("mobile-overlay");
  const menuButton = document.getElementById("menu-button");

  // Check if click is outside sidebar and not on menu button
  if (
    !sidebar.contains(event.target) &&
    !menuButton.contains(event.target) &&
    sidebar.classList.contains("mobile-open")
  ) {
    closeMobileMenu();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("promo-container");
  const title = document.getElementById("title");
  const subtitle = document.getElementById("subtitle");
  const description = document.getElementById("description");
  const orderButton = document.getElementById("order-button");

  // Fade in container
  setTimeout(() => {
    container.classList.remove("opacity-0");
    container.classList.add("opacity-100");
  }, 200);

  // Staggered animations for elements
  setTimeout(() => {
    title.classList.remove("opacity-0");
    title.classList.add("animate-fade-in");
  }, 500);

  setTimeout(() => {
    subtitle.classList.remove("opacity-0");
    subtitle.classList.add("animate-pulse-custom");
  }, 800);

  setTimeout(() => {
    description.classList.remove("opacity-0");
    description.classList.add("animate-fade-in");
  }, 1100);

  setTimeout(() => {
    orderButton.classList.remove("opacity-0");
    orderButton.classList.add("animate-fade-in");
  }, 1400);

  // Optional: Add click effect to order button
  orderButton.addEventListener("click", (e) => {
    e.target.classList.add("scale-90");
    setTimeout(() => {
      e.target.classList.remove("scale-90");
    }, 100);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dishCards = document.querySelectorAll(".dish-card");

  // Staggered animation for dish cards
  dishCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.remove("opacity-0");
      card.classList.add("animate-dish-enter");
    }, 200 * (index + 1));

    // Add hover effect to images
    const img = card.querySelector("img");
    card.addEventListener("mouseenter", () => {
      img.classList.add("scale-110");
    });
    card.addEventListener("mouseleave", () => {
      img.classList.remove("scale-110");
    });

    // Add click effect to order buttons
    const orderButton = card.querySelector("a");
    orderButton.addEventListener("click", (e) => {
      e.target.classList.add("scale-90");
      setTimeout(() => {
        e.target.classList.remove("scale-90");
      }, 100);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dessertCards = document.querySelectorAll(".dessert-card");

  // Staggered animation for dessert cards
  dessertCards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.remove("opacity-0");
      card.classList.add("animate-dessert-enter");
    }, 200 * (index + 1));

    // Add hover effect to images
    const img = card.querySelector("img");
    card.addEventListener("mouseenter", () => {
      img.classList.add("scale-110");
    });
    card.addEventListener("mouseleave", () => {
      img.classList.remove("scale-110");
    });

    // Add click effect to order buttons
    const orderButton = card.querySelector("a");
    orderButton.addEventListener("click", (e) => {
      e.target.classList.add("scale-90");
      setTimeout(() => {
        e.target.classList.remove("scale-90");
      }, 100);
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  console.log("Script de búsqueda cargado");

  // Verificar que el input de búsqueda exista
  const searchInput = document.querySelector(
    'input[placeholder="Buscar platos o postres..."]'
  );

  if (!searchInput) {
    console.error("No se encontró el input de búsqueda");
    return;
  }

  // Función para filtrar platos
  function filterDishes() {
    // Obtener término de búsqueda y convertir a minúsculas
    const searchTerm = searchInput.value.toLowerCase().trim();
    console.log("Término de búsqueda:", searchTerm);

    // Seleccionar contenedores de platos
    const platos = document.querySelectorAll(
      "#platos .grid > div, #postres .grid > div"
    );

    if (platos.length === 0) {
      console.error("No se encontraron platos para filtrar");
      return;
    }

    platos.forEach((plato) => {
      // Añadir transiciones
      plato.style.transition = "opacity 0.3s ease, transform 0.3s ease";

      // Obtener el nombre del plato
      const nombrePlato = plato.querySelector("p.text-gray-700");

      if (!nombrePlato) {
        console.warn("No se encontró nombre para un plato");
        return;
      }

      const textoPlato = nombrePlato.textContent.toLowerCase();

      // Mostrar u ocultar con efectos
      if (searchTerm === "" || textoPlato.includes(searchTerm)) {
        plato.style.opacity = "1";
        plato.style.transform = "scale(1)";
        plato.style.display = "block";
      } else {
        plato.style.opacity = "0";
        plato.style.transform = "scale(0.9)";

        // Pequeño retraso para ocultar después de la animación
        setTimeout(() => {
          plato.style.display = "none";
        }, 300);
      }
    });
  }

  // Añadir evento de escucha para la búsqueda
  searchInput.addEventListener("input", filterDishes);

  console.log("Búsqueda configurada correctamente");
});
