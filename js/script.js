// Editor HTML interactivo
const htmlCode = document.getElementById('html-code');
const htmlOutput = document.getElementById('html-output');

htmlCode.addEventListener('input', function() {
    htmlOutput.innerHTML = htmlCode.value;
});

// Editor CSS interactivo
const cssCode = document.getElementById('css-code');
const cssOutput = document.getElementById('css-output');

cssCode.addEventListener('input', function() {
    cssOutput.style = cssCode.value;
});

const svgOutput = document.getElementById('svg-output');
svgOutput.innerHTML = `
    <svg width="100" height="100">
        <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
    </svg>
`;

setInterval(function() {
    const circle = svgOutput.querySelector('circle');
    circle.setAttribute('fill', circle.getAttribute('fill') === 'yellow' ? 'orange' : 'yellow');
}, 1000);

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
    document.getElementById("header-title").textContent = translations[language]["title"];
    document.getElementById("header-subtitle").textContent = translations[language]["description"];
    document.getElementById("html-title").textContent = translations[language]["html_title"];
    document.getElementById("html-description").textContent = translations[language]["html_description"];
    document.getElementById("learn-more").textContent = translations[language]["learn_more"];
    document.getElementById("css-title").textContent = translations[language]["css_title"];
    document.getElementById("css-description").textContent = translations[language]["css_description"];
    document.getElementById("css-label").textContent = translations[language]["css_label"];
    document.getElementById("result").textContent = translations[language]["result"];
    document.getElementById("svg-title").textContent = translations[language]["svg_title"];
    document.getElementById("svg-description").textContent = translations[language]["svg_description"];
    document.getElementById("svg-example").textContent = translations[language]["svg_example"];
    document.getElementById("footer").textContent = translations[language]["footer"];
    document.getElementById("language-selector").value = language;
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

