interface Animals {
   move(): void;
   sound(): string;
   color?: string; // Опціональна властивість, так як не всі тварини мають колір
   legs?: number; // Опціональна властивість, так як не всі тварини мають ноги
}

class MyCat implements Animals {
   move() {
      console.log("Cat is walking...");
   }

   sound() {
      return "Meow";
   }
}
interface Animals {
   move(): void;
   sound(): string;
}

class Bird implements Animals {
   move() {
      console.log("Bird is flying...");
   }

   sound() {
      return "Chirp";
   }

   color: string; // Опціональна властивість color
   wingspan: number; // Опціональна властивість wingspan

   constructor(color: string, wingspan: number) {
      this.color = color;
      this.wingspan = wingspan;
   }
}

class Fish implements Animals {
   move() {
      console.log("Fish is swimming...");
   }

   sound() {
      return "Blub";
   }

   legs: number = 0; // Опціональна властивість legs
   type: string; // Опціональна властивість type

   constructor(type: string) {
      this.type = type;
   }
}

const parrot = new Bird("Green", 20);
console.log(parrot.color); // Виведе: Green
console.log(parrot.wingspan); // Виведе: 20

const salmon = new Fish("Salmon");
console.log(salmon.type); // Виведе: Salmon


