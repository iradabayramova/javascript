let numFirst = parseInt(prompt('Введите первое число'));
num1 = Number(numFirst);

let numSecond = parseInt(prompt('Введите второе число'));
num2 = Number(numSecond);


let operator = prompt('оператор (/,+,*,-)');


switch (operator) {
    case '+':
        alert (numFirst + numSecond);
        break;
    case '-':
        alert (numFirst - numSecond);
        break;
    case '/':
        alert (numFirst / numSecond);
        break;
    case '*':
        alert (numFirst * numSecond);
      
   
}
