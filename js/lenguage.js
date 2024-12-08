const translations = {
    es: {
        title: "Web4U",
        description: "Aprende sobre HTML, CSS y SVG con ejemplos interactivos.",
        html: "HTML",
        css: "CSS",
        svg: "SVG",
        html_title: "HTML - Estructura Básica",
        html_description: "HTML es el lenguaje de marcado que se utiliza para estructurar el contenido en la web.",
        learn_more: "Saber más",
        css_title: "CSS - Estilo y Diseño",
        css_description: "CSS se usa para darle estilo a los elementos HTML, desde colores hasta animaciones.",
        css_label: "Código CSS:",
        result: "Resultado:",
        svg_title: "SVG - Gráficos Escalables",
        svg_description: "SVG permite crear gráficos vectoriales que se pueden escalar sin perder calidad.",
        svg_example: "Ejemplo de SVG:",
        footer: "© 2024 Web4U. Todos los derechos reservados.",
        language: "Idioma:"
    },
    en: {
        title: "Web4U",
        description: "Learn about HTML, CSS, and SVG with interactive examples.",
        html: "HTML",
        css: "CSS",
        svg: "SVG",
        html_title: "HTML - Basic Structure",
        html_description: "HTML is the markup language used to structure content on the web.",
        learn_more: "Learn more",
        css_title: "CSS - Style and Design",
        css_description: "CSS is used to style HTML elements, from colors to animations.",
        css_label: "CSS Code:",
        result: "Result:",
        svg_title: "SVG - Scalable Graphics",
        svg_description: "SVG allows you to create vector graphics that can be scaled without losing quality.",
        svg_example: "SVG Example:",
        footer: "© 2024 Web4U. All rights reserved.",
        language: "Language:"
    }
};



if (!localStorage.getItem("language")) {
    localStorage.setItem("language", "en"); 
}

function changeLanguage(language) {
    localStorage.setItem("language", language);
    translatePage(language);
}

function translatePage(language) {
    document.getElementById("header-title").textContent = translations[language]["header_title"];
    document.getElementById("header-subtitle").textContent = translations[language]["header_subtitle"];
    document.getElementById("content-title").textContent = translations[language]["content_title"];
    document.getElementById("content-paragraph").textContent = translations[language]["content_paragraph"];
    document.getElementById("button").textContent = translations[language]["button_label"];
}

window.onload = function() {
    const currentLanguage = localStorage.getItem("language");
    document.getElementById("language-selector").value = currentLanguage; 
    translatePage(currentLanguage);
};

document.getElementById("language-selector").addEventListener("change", function(e) {
    const selectedLanguage = e.target.value;
    changeLanguage(selectedLanguage);
});
