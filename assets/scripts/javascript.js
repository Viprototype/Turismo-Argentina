/* Cambio de idioma */

function changeLanguage(language) {
  var currentPath = window.location.pathname;
  var newPath;

  if (language === 'en') {
    newPath = currentPath.substring(0, currentPath.lastIndexOf('/')) + '/index-en.html';
  } else {
    newPath = currentPath.substring(0, currentPath.lastIndexOf('/')) + '/index.html';
  }

  window.location.href = newPath;
}

/* Botón de subir */

window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  var scrollBtn = document.getElementById("scrollBtn");

  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 20) {
    scrollBtn.classList.remove("hide");
  } else {
    scrollBtn.classList.add("hide");
  }
}

function scrollToTop() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE y Opera
}
