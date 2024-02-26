class StringIterator {
   private data: string[];

   constructor(...args: string[]) {
      this.data = args;
   }

   *toGenerate(): Generator<string> {
      for (const value of this.data) {
         if (!isNaN(Number(value))) {
            console.error(`Error: Numeric value "${value}" is not allowed.`);
            return; // При знаходженні числового значення завершуємо генератор
         }
         yield value;
      }
   }
}

// Приклад використання
const myIterator = new StringIterator("one", "two", "three", "4", "five");

const generator = myIterator.toGenerate();
for (const value of generator) {
   console.log(value);
}
