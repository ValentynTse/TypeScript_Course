function validateInput(promptMessage: string, validOptions: string[]): string {
   let userInput: string | null = null;
   while (!userInput || !validOptions.includes(userInput)) {
      userInput = prompt(promptMessage);
      if (!userInput || !validOptions.includes(userInput)) {
         alert("Будь ласка, введіть коректний варіант відповіді");
      }
   }
   return userInput;
}

function calculateIceCreamCost(): number {
   const smallCupPrice: number = 10;
   const largeCupPrice: number = 25;
   const toppingPrices: { [key: string]: number } = {
      "1": 5, // шоколад
      "2": 6, // карамель
      "3": 10, // ягоди
   };
   const marshmallowPrice: number = 5;

   let totalPrice: number = 0;

   const sizeInput: string = validateInput(
      "Виберіть розмір морозива (маленький: 1 або великий: 2)",
      ["1", "2"]
   );

   if (sizeInput === "1") {
      totalPrice += smallCupPrice;
   } else if (sizeInput === "2") {
      totalPrice += largeCupPrice;
   }

   const chocolateToppingInput: string = validateInput(
      "Чи бажаєте наповнювач шоколад? (так: 1 або ні: 0)",
      ["0", "1"]
   );
   if (chocolateToppingInput === "1") {
      totalPrice += toppingPrices["1"];
   }

   const caramelToppingInput: string = validateInput(
      "Чи бажаєте наповнювач карамель? (так: 1 або ні: 0)",
      ["0", "1"]
   );
   if (caramelToppingInput === "1") {
      totalPrice += toppingPrices["2"];
   }

   const berriesToppingInput: string = validateInput(
      "Чи бажаєте наповнювач ягоди? (так: 1 або ні: 0)",
      ["0", "1"]
   );
   if (berriesToppingInput === "1") {
      totalPrice += toppingPrices["3"];
   }

   const marshmallowInput: string = validateInput(
      "Чи бажаєте посипати маршмелоу (так: 1 або ні: 0)",
      ["0", "1"]
   );
   if (marshmallowInput === "1") {
      totalPrice += marshmallowPrice;
   }

   return totalPrice;
}

const iceCreamCost: number = calculateIceCreamCost();
console.log(`Вартість морозива: ${iceCreamCost} грн`);
