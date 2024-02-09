function cambiarColor() {
    var select = document.getElementById("colores-primarios");
    var circulo = document.getElementById("circulo");
    var colorSeleccionado = select.value;
    circulo.style.backgroundColor = colorSeleccionado;
}

function agrandarWidth() {
  var circulo = document.getElementById("circulo");
  var estilo = window.getComputedStyle(circulo);
  var anchoActual = parseInt(estilo.width, 10);
  circulo.style.width = (anchoActual + 40) + "px";
}

function disminuirWidth() {
  var circulo = document.getElementById("circulo");
  var estilo = window.getComputedStyle(circulo);
  var anchoActual = parseInt(estilo.width, 10);
  if (anchoActual > 10) {
    circulo.style.width = (anchoActual - 40) + "px";
  }
}

function agrandarHeight() {
  var circulo = document.getElementById("circulo");
  var estilo = window.getComputedStyle(circulo);
  var altoActual = parseInt(estilo.height, 10);
  circulo.style.height = (altoActual + 40) + "px";
}

function disminuirHeight() {
  var circulo = document.getElementById("circulo");
  var estilo = window.getComputedStyle(circulo);
  var altoActual = parseInt(estilo.height, 10);
  if (altoActual > 10) {
    circulo.style.height = (altoActual - 40) + "px";
  }
}

  function ocultar() {
    document.getElementById("circulo").hidden = true;
  }

  function mostrar() {
    document.getElementById("circulo").hidden = false;
  }