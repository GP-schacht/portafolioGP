/*document.querySelectorAll(".carrusel").forEach((carrusel) => {
    carrusel.addEventListener("mouseover", () => {
        const tools = carrusel.querySelectorAll("a"); // Solo selecciona elementos dentro de este carrusel
        tools.forEach((tool) => {
            tool.style.animationPlayState = "paused";  // Pausar solo los elementos de este carrusel
        });
    });

    carrusel.addEventListener("mouseleave", () => {
        const tools = carrusel.querySelectorAll("a");
        tools.forEach((tool) => {
            tool.style.animationPlayState = "running"; // Reanudar solo los elementos de este carrusel
        });
    });
}); */
const menu = document.getElementById("menu");
const btnMenu = document.querySelector('.btnMenu');

btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('active');

  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    menu.classList.add("hide"); // Activar animación de salida
    setTimeout(() => {
      menu.classList.remove("hide");
      menu.style.display = "none";
   
    }, 500); // Tiempo igual a la duración de la animación
  } else {
    menu.style.display = "block"; // Mostrar antes de la animación de entrada
    menu.classList.add("active"); // Activar animación de entrada
  }
});

document.querySelectorAll(".carrusel").forEach((carrusel) => {
    carrusel.addEventListener("mouseover", () => {
        const tools = carrusel.querySelectorAll("a"); // Solo selecciona elementos dentro de este carrusel
        tools.forEach((tool) => {
            tool.style.animationPlayState = "paused";  // Pausar solo los elementos de este carrusel
        });
    });

    carrusel.addEventListener("mouseleave", () => {
        const tools = carrusel.querySelectorAll("a");
        tools.forEach((tool) => {
            tool.style.animationPlayState = "running"; // Reanudar solo los elementos de este carrusel
        });
    });
});




