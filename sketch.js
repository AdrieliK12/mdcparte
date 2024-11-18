function setup() {
    createCanvas( 500, 200);
    background(175, 238, 238);
    textStyle(BOLD);
    text("Digite os números que deseja encontrar o MDC", 5, 20);
  
    inputA = createInput();
    inputA.position(10, 40);
  
    inputB = createInput();
    inputB.position(10, 70);
  
    button = createButton('Calcular MDC');
    button.position(10, 100);
    button.mousePressed(calcular);
  
    // Criar um elemento div para armazenar os resultados
    resultContainer = createDiv();
    resultContainer.position(10, 130);
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