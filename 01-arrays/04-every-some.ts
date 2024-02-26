// every - функція повертає true якщо всі елементи задовольняють умову.
// some - функція повертає true якщо хоча б один елемент задовольняє умову.

const data1: number[] = [1, 2, 3, 4, 5, 6, 100];
const resultOne: boolean = data1.every(value => value > 10);
console.log(resultOne);

const data2: number[] = [11, 21, 31, 41, 1];
const resultTwo: boolean = data2.every(value => value > 10);
console.log(resultTwo);

const data3: number[] = [1, 3, 5, 7, 9, 2];
const resultThree: boolean = data3.some(value => value % 2 === 0);
console.log(resultThree);
