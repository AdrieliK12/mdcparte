function setup() {
    createCanvas(5000, 1000);
    background(175, 238, 238);
    textStyle(BOLD);
    text("Digite os números que deseja encontrar o MDC", 850, 360);
  
    inputA = createInput();
    inputA.position(850, 400);
  
    inputB = createInput();
    inputB.position(850, 440);
  
    button = createButton('Calcular MDC');
    button.position(850, 480);
    button.mousePressed(calcular);
  
    // Criar um elemento div para armazenar os resultados
    resultContainer = createDiv();
    resultContainer.position(850, 500);
  }
  
  function calcular() {
  
    resultContainer.html("");
  
    let num1 = int(inputA.value());
    let num2 = int(inputB.value());
    function calcularMDC(a, b) {
    while (b !== 0) {
      let temp = a % b;
      a = b;
      b = temp;
    }
    return a;
    }
    let resultado = calcularMDC(num1, num2);
    
    resultContainer.child(createP('O MDC é: ' + resultado));
  }