// У TypeScript всі параметри функції обов'язкові.
// але якщо після імені параметра вказати символ '?'
// параметр стане опціональним, і якщо під час
// виклику його не надати
// значення цього параметра буде undefined
// Опціональні параметри можуть бути лише останніми
// параметрами у списку параметрів.

// optional parameters
function getFullName(firstName: string, lastName?: string): string {
    if (lastName) {
        return firstName + ' ' + lastName;
    } else {
        return firstName;
    }
}

const fullName1: string = getFullName('Taras', 'Petrynenko');
const fullName2: string = getFullName('Taras');

console.log(fullName1);
console.log(fullName2);

// Параметри зі значенням за умовчанням - параметри методу,
// котрим у оголошенні функції присвоєно значення,
// яке буде використовуватися, якщо функція буде викликана
// без вказівки значення для даного параметра або
// якщо значення буде передано undefined

// default-iniatialize parametes
function getDisplayName(firstName: string, lastName: string = 'Petrynenko') {
    return 'Display Name: ' + firstName + ' ' + lastName;
}

const fullName3: string = getDisplayName('Taras', 'Petrynenko');
const fullName4: string = getDisplayName('Taras');
const fullName5: string = getDisplayName('Taras', 'undefined');

console.log(fullName3);
console.log(fullName4);
console.log(fullName5);
