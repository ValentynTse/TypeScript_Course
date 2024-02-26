const myArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// forEach - обхід всіх елементів масиву та запуск певної функції для значення кожного елемента.
const myCallback = (value:number) => {
  const message = value % 2 === 0 ? 'Парне число' : 'Непарне число';
  console.log(value + ' - ' + message);
};
// myArray.forEach(myCallback);

// збільшення кожного елемента масиву на 1
myArray.forEach((value: number, index: number, array: number[]) => {
  array[index] = value + 1;
});
// console.log(myArray);

const myCallbackFunc = (value: number, index: number, array: number[]) => {
  array[index] = value + 1;
  console.log(value);
};
// myArray.forEach(myCallbackFunc);

// список літер які можуть повторятись
const letters: string[] = ['a', 'b', 'c', 'a', 'c', 'a'];
// в цю змінну ми запишeмо унікальні значення літер і кількість повторень
const repeats = {};

// letters.forEach(letter => {
//   // якшо така літера вже існує, то ми додаємо 1 до кількості повторень
//   // якщо літера зустрічається вперше, то ми запишемо значення 1
//   if (repeats[letter]) {
//     repeats[letter] += 1;
//   } else {
//     repeats[letter] = 1;
//   }
// });

// console.log(repeats);

const myCallbackFunction = (letter:string) => {
  if (repeats[letter]) {
    repeats[letter] += 1;
  } else {
    repeats[letter] = 1;
  }
};

letters.forEach(myCallbackFunction);

console.log(repeats);
