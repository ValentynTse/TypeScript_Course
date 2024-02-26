class MyDictionary<T> {
   private terms: { [key: string]: { value: T, description: string } } = {};

   get(key: string): T | undefined {
      const term = this.terms[key];
      if (term) {
         return term.value;
      }
      return undefined;
   }

   set(key: string, value: T, description: string) {
      this.terms[key] = { value, description };
   }
}

// Приклад використання
const myDictionary = new MyDictionary<number>();

myDictionary.set("key1", 10, "Description 1");
myDictionary.set("key2", 20, "Description 2");

console.log(myDictionary.get("key1")); // Виведе: 10
console.log(myDictionary.get("key2")); // Виведе: 20
console.log(myDictionary.get("key3")); // Виведе: undefined

//==========================================================================

const stringDictionary = new MyDictionary<string>();

stringDictionary.set("name", "John", "User's name");
stringDictionary.set("email", "john@example.com", "User's email");

console.log(stringDictionary.get("name")); // Виведе: John
console.log(stringDictionary.get("email")); // Виведе: john@example.com
console.log(stringDictionary.get("age")); // Виведе: undefined

//==========================================================================

interface Book {
   title: string;
   author: string;
}

const bookDictionary = new MyDictionary<Book>();

bookDictionary.set("book1", { title: "Harry Potter", author: "J.K. Rowling" }, "Fantasy novel");
bookDictionary.set("book2", { title: "1984", author: "George Orwell" }, "Dystopian fiction");

console.log(bookDictionary.get("book1")); // Виведе: { title: "Harry Potter", author: "J.K. Rowling" }
console.log(bookDictionary.get("book2")); // Виведе: { title: "1984", author: "George Orwell" }
console.log(bookDictionary.get("book3")); // Виведе: undefined

//================================================================================

interface Product {
   name: string;
   price: number;
}

const productDictionary = new MyDictionary<Product>();

productDictionary.set("product1", { name: "Laptop", price: 1000 }, "High-end laptop");
productDictionary.set("product2", { name: "Smartphone", price: 500 }, "Flagship smartphone");

console.log(productDictionary.get("product1")); // Виведе: { name: "Laptop", price: 1000 }
console.log(productDictionary.get("product2")); // Виведе: { name: "Smartphone", price: 500 }
console.log(productDictionary.get("product3")); // Виведе: undefined
