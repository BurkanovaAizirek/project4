//1)-----Перепишите код, заменив цикл for на while, без изменения поведения цикла.
// for (let i = 0; i < 3; i++) {
// alert( `number ${i}!` );
// }
let i = 0;
while (i < 3) {
  console.log(`number ${i}!`);
  i++;
}

//2)------Выведите простые числа с массива let arr = [1, 3, 4, 6, 9, 11, 24, 17]
let arr = [1, 3, 4, 6, 9, 11, 24, 17];

function isPrime(num) {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

for (let i = 0; i < arr.length; i++) {
  if (isPrime(arr[i])) {
    console.log(arr[i]);
  }
}

// 3)--------Используя цикл выведите массив в обратном порядке из let arr = [1, 3, 4, 6, 9, 11, 24, 17], вывод: [17, 24, 11, 9, 6, 4, 3, 1]
let array = [1, 3, 4, 6, 9, 11, 24, 17];
let reversedArr = [];

for (let i = array.length - 1; i >= 0; i--) {
  reversedArr.push(array[i]);
}

console.log(reversedArr);


//4)-------Создайте цикл while, который выводит в консоль числа от 3 до 7.
let value = 3;
while(value <= 7){
    console.log(value);
    value++
}

// 5)-------Напишите программу, которая находит первое четное число в массиве и выводит его. Если четных чисел нет, выведите сообщение Нет четного числа

let arr1 = [1, 3, 5, 7, 9, 11, 2, 4, 6];

let number = arr1.find(num => num % 2 === 0);

if (number !== undefined) {
  console.log(`Первое четное число: ${number}`);
} else {
  console.log("Нет четного числа");
}

// 6)-------Напишите программу, которая выводит все числа от 1 до 10, кроме числа 5.
for (let value1 = 1; value1 <=10; value1++){
    if (value1 !==5){
    console.log(value1);
  }
} 