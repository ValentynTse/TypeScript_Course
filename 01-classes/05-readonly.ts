// за допомогою ключового слова readonly можна створити поля лише для читання
// Таке поле може бути ініціалізоване в момент його створення або у конструкторі
class Dog {
    public readonly name: string;
    public readonly numberOfLegs: number = 4;

    constructor(name: string) {
        this.name = name;
    }
}

const dog: Dog = new Dog('Sharik');
// dog.name = "";
// dog.numberOfLegs = 5; // Cannot assign to 'numberOfLegs' because it is a read-only property.
console.log(dog.name);
console.log(dog.numberOfLegs);

const dog1: Dog = new Dog('Barsik');
console.log(dog1.name);
console.log(dog1.numberOfLegs);
