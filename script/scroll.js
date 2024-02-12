function scrollToSection() {     //<button onclick="scrollToSection()">Прокрутить к разделу</button>
    let targetElement = document.getElementById("targetSection");   //<div id="targetSection">
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  }