let num1 = parseInt(prompt('Введите первое число'));
num1 = Number(num1);

let num2 = parseInt(prompt('Введите второе число'));
num2 = Number(num2);


let operator = prompt('оператор (/,+,*,-)');


switch (operator) {
    case '+':
        alert (num1 + num2);
        break;
    case '-':
        alert (num1 - num2);
        break;
    case '/':
        alert (num1 / num2);
        break;
    case '*':
        alert (num1 * num2);
      
   
}