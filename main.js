let userInput;
const numbers = [];
let total = 0;

while (total!==null){
  let userInput = prompt('Введите число');
  if (userInput==null){
    alert('Вы нажали Отмена');
    total = null;
  }
  else if (isNaN(userInput)){
    alert('Было введено не число, попробуйте ещё раз!');
    continue;
  }
  else if (userInput== '' || userInput==0){
    alert('Попробуйте ещё раз ввести число!');
  }
  else {
    alert('Вы ввели нужное число');
    numbers.push(parseFloat(userInput));
  }
}
console.log(numbers);

for (i=0; i<numbers.length; i++){
  total=total+numbers[i];
}
alert('Общая сумма чисел равна:' +total);

