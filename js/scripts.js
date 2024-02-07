function cambiarColor() {
    var select = document.getElementById("colores-primarios");
    var circulo = document.getElementById("circulo");
    var colorSeleccionado = select.value;
    circulo.style.backgroundColor = colorSeleccionado;
}
function agrandar() {
    var circulo = document.getElementById("circulo");
    var estilo = window.getComputedStyle(circulo);
    var diametroActual = parseInt(estilo.width, 10);
    circulo.style.width = (diametroActual + 10) + "px";
    circulo.style.height = (diametroActual + 10) + "px";
  }
  
  function disminuir() {
    var circulo = document.getElementById("circulo");
    var estilo = window.getComputedStyle(circulo);
    var diametroActual = parseInt(estilo.width, 10);
    if (diametroActual > 10) {
      circulo.style.width = (diametroActual - 10) + "px";
      circulo.style.height = (diametroActual - 10) + "px";
    }
  }