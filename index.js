let numFirst = parseInt(prompt('Введите первое число'));
numFirst = Number(numFirst);

let numSecond = parseInt(prompt('Введите второе число'));
numSecond = Number(numSecond);


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
