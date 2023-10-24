function calcularTranspuesta() {
    // Proceso para el Calculo de Transpuesta
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);

    const at11 = a11;
    const at12 = a21;
    const at21 = a12;
    const at22 = a22;

    document.getElementById('at11').innerText = at11;
    document.getElementById('at12').innerText = at12;
    document.getElementById('at21').innerText = at21;
    document.getElementById('at22').innerText = at22;
  }

  function calcularDeterminante() {
    // Proceso para el Calculo de Determinante
    const a11 = parseFloat(document.getElementById('a11').value);
    const a12 = parseFloat(document.getElementById('a12').value);
    const a21 = parseFloat(document.getElementById('a21').value);
    const a22 = parseFloat(document.getElementById('a22').value);

    const determinante = (a11 * a22) - (a12 * a21);

    document.getElementById('resultado').innerText = `Determinante: ${determinante}`;
  }

  function calculateSumAndSubtract() {
    // Proceso para el Calculo de Suma y Resta
    const a = [];
    const b = [];
    const sum = [];
    const sub = [];

    // Para matriz A
    for (let i = 0; i < 3; i++) {
        a[i] = [];
        for (let j = 0; j < 3; j++) {
            a[i][j] = parseFloat(document.getElementById('a' + i + j).value);
        }
    }

    // Para matriz B
    for (let i = 0; i < 3; i++) {
        b[i] = [];
        for (let j = 0; j < 3; j++) {
            b[i][j] = parseFloat(document.getElementById('b' + i + j).value);
        }
    }

    // Suma y Resta
    for (let i = 0; i < 3; i++) {
        sum[i] = [];
        sub[i] = [];
        for (let j = 0; j < 3; j++) {
            sum[i][j] = a[i][j] + b[i][j];
            sub[i][j] = a[i][j] - b[i][j];
        }
    }

    // Resultado
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById('sum' + i + j).textContent = sum[i][j];
            document.getElementById('sub' + i + j).textContent = sub[i][j];
        }
    }
}