/*///// Código del ejercicio de configuración de canvas (S05. Ex.01.) ///*/
const CANVAS = document.getElementById("lienzo");
const CTX = CANVAS.getContext("2d");
CANVAS.width = window.innerWidth;
CANVAS.height = window.innerHeight;

function updateCanvasSize() {
  CANVAS.width = CANVAS.getBoundingClientRect().width;
  CANVAS.height = CANVAS.getBoundingClientRect().height;
}

function renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY) {
    CTX.strokeStyle = colorTrazo;
    CTX.lineWidth = grosorLinea;
    CTX.beginPath();
    CTX.moveTo(origenX, origenY);
    CTX.lineTo(finalX, finalY);
    CTX.stroke();
}

function renderOneLineType2(colorTrazo, grosorLinea, origenXY, finalXY) {
    CTX.strokeStyle = colorTrazo;
    CTX.lineWidth = grosorLinea;
    CTX.beginPath();
    CTX.moveTo(origenXY, origenXY);
    CTX.lineTo(finalXY, finalXY);
    CTX.stroke();
}

function renderOneLineType3(colorTrazo, grosorLinea, finalX, finalY) {
    CTX.strokeStyle = colorTrazo;
    CTX.lineWidth = grosorLinea;
    CTX.beginPath();
    CTX.moveTo(70, 0);
    CTX.lineTo(finalX, finalY);
    CTX.stroke();
}



/*///// 1. Definir funcion de dibujo que estaremos repitiendo usando requestAnimationFrame() ///*/
function renderLines() {
  CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);

  /*///// 2. Secuencia de comandos para dibujar una linea ///*/
    /* 
      1. Definir el estilo de la línea (como color y grosor).
      2. Definir el inicio de la línea usando la función beginPath()
      3. Definir el punto de origen de la línea usando la función moveTo(x, y)
      4. Definir otro punto en el canvas al cual se va a conectar la línea usando lineTo(x, y)
      5. Definir tantos puntos como se desee
      *. (Opcional) Usar la función closePath() para trazar una línea desde el último punto hasta el origen de la línea.
      6. Usar la función stroke() para renderizar la línea en el canvas
      
      7. En caso de desear realizar más líneas, se repiten los pasos del 1 al 6.
    */
  CTX.strokeStyle = "aqua";
  CTX.lineWidth = 20;

  CTX.beginPath();
  CTX.moveTo(30, 30);
  CTX.lineTo(160, 160);
  CTX.lineTo(360, 160);
  CTX.closePath();
  CTX.stroke();

//   renderOneLine(colorTrazo, grosorLinea, origenX, origenY, finalX, finalY)
  renderOneLine("red", 5, 0, 0, 50, 500);
  renderOneLine("red", 5, 0, 0, 150, 500);

//   renderOneLineType2(colorTrazo, grosorLinea, origenXY, finalXY) {
    renderOneLineType2("green", 10, 20, 300)
    
    // renderOneLineType3(colorTrazo, grosorLinea, finalX, finalY)
    renderOneLineType3("#ffff00", 2, 10, 300);
    renderOneLineType3("#ffff00", 2, 20, 300);
    renderOneLineType3("#ffff00", 2, 30, 300);
    renderOneLineType3("#ffff00", 2, 40, 300);
    renderOneLineType3("#ffff00", 2, 50, 300);
    renderOneLineType3("#ffff00", 2, 60, 300);
    renderOneLineType3("#ffff00", 2, 70, 300);
    renderOneLineType3("#ffff00", 2, 80, 300);
  
  

  requestAnimationFrame(renderLines);
}



/*///// 6. Ejecutar nuestro código ///*/
window.addEventListener("resize", updateCanvasSize);
requestAnimationFrame(renderLines);



/* Happy Coding! 👾 */
// Documentacion sobre los comandos de dibujo disponibles:
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D