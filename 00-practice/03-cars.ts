// Абстрактний батьківський клас Car
abstract class Car {
   protected brand: string;
   public year: number;

   constructor(brand: string, year: number) {
      this.brand = brand;
      this.year = year;
   }

   abstract showDetails(): void;
}

// Похідний клас BMW
class BMW extends Car {
   private model: string;

   constructor(brand: string, year: number, model: string) {
      super(brand, year);
      this.model = model;
   }

   showDetails(): void {
      console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`);
   }
}

// Похідний клас Mercedes
class Mercedes extends Car {
   private color: string;

   constructor(brand: string, year: number, color: string) {
      super(brand, year);
      this.color = color;
   }

   showDetails(): void {
      console.log(`Brand: ${this.brand}, Color: ${this.color}, Year: ${this.year}`);
   }
}

// Похідний клас Audi
class Audi extends Car {
   private price: number;

   constructor(brand: string, year: number, price: number) {
      super(brand, year);
      this.price = price;
   }

   showDetails(): void {
      console.log(`Brand: ${this.brand}, Price: ${this.price} USD, Year: ${this.year}`);
   }
}

// Створення екземплярів класів
const bmw1 = new BMW("BMW", 2020, "X5");
const bmw2 = new BMW("BMW", 2019, "X3");

const mercedes1 = new Mercedes("Mercedes", 2018, "Black");
const mercedes2 = new Mercedes("Mercedes", 2021, "White");

const audi1 = new Audi("Audi", 2017, 25000);
const audi2 = new Audi("Audi", 2016, 20000);

// Виклик методів для виведення деталей автомобілів
bmw1.showDetails();
bmw2.showDetails();

mercedes1.showDetails();
mercedes2.showDetails();

audi1.showDetails();
audi2.showDetails();
