document.getElementById("svgText").addEventListener("click", function() {
    document.getElementById("svgText").setAttribute("fill", "green");

    document.getElementById("clickMessage").innerText = "¡Has hecho clic en el texto dentro de SVG! El color cambió a verde.";
});
