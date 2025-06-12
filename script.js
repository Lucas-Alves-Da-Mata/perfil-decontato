function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // pegar a tag img
    const img = document.querySelector("#profile img");

    // Substuir a imagem
    if(html.classList.contains("light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("SRC","./assets/images/avatar-light.jpg");
    } else {
      // se nao tiver light mode, mander a imagem atual
        img.setAttribute("SRC", "./assets/images/avatar-dark.jpg");
    }
}