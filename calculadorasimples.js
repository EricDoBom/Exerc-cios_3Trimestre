function calculadora(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        default:
            "Operação inválida"
    }

    
    
}
console.log(calculadora(5, 6, '+'))
console.log(calculadora(5, 6, '-'))

