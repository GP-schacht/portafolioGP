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

const btnMenu = document.querySelector('.btnMenu');
btnMenu.addEventListener('click', () => {
  btnMenu.classList.toggle('active');
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
