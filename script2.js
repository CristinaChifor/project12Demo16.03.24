console.log(`Hello`);

/**
 * Numere Pare și Impare: 
 * Scrie un program care afișează toate numerele pare de la 1 la 20
 * și toate numerele impare de la 1 la 20
 */

const evenNumbers = [];
const oddNumbers = [];

for (let i=1; i<=20; i++) {
    if (i % 2 === 0) {
        evenNumbers.push(i);
    } else {
        oddNumbers.push(i);
    }
}

console.log('Numerele pare sunt: ', evenNumbers);
console.log('Numerele impare sunt: ', oddNumbers);

/**
* Verificare Număr Prim: 
* Scrie un program care verifică dacă un numar este prim.
*/
const numberToCheck = 43; // poate fi inlocuit cu orice numar
let isPrime = true;

// parcurgem toate numerele de la 2 pana la radical din numarul verificat
for (let i = 2; i <= Math.sqrt(numberToCheck); i++) {
    if (numberToCheck % i === 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) {
    console.log(`Numarul ${numberToCheck} este prim.`);
} else {
    console.log(`Numarul ${numberToCheck} nu este prim.`);
}

/**
* Suma Multiplilor de 3 și 5: 
* Calculează suma tuturor numerelor întregi 
* până la 100 care sunt multipli de 3 sau 5.
*/
let suma = 0;

for (let i = 1; i < 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        suma += i;
    }
}
console.log(`Suma numerelor multipli de 3 sau 5 până la 100 este: ${suma}`);

/**
* Afișarea Elementelor Șirului: 
* Creează un șir cu câteva cuvinte și folosește o buclă 
* 'for' pentru a afișa fiecare cuvânt în consolă.
*/
const words = ['programare', 'javascript', 'bucla', 'variabila', 'functie'];

console.log('Cuvintele din șir sunt:');
for (const word of words) {
    console.log(word);
}

/**
* Verificare Palindrom: 
* Scrie un program care verifică dacă un cuvant
* este un palindrom (se citește la fel de la stânga la 
* dreapta și de la dreapta la stânga, ignorând spațiile și diferențele de majuscule)
*/
let wordToCheck = 'a bba';
wordToCheck = wordToCheck.toLowerCase().replace(/\s/g, ''); // Convertim la litere mici și eliminăm spațiile
const reverse = wordToCheck.split('').reverse().join('');
const isPalindromeMessage = `Cuvantul ${wordToCheck} este palindrom`;
const notPalindromeMessage = `Cuvantul ${wordToCheck} nu este palindrom` 
wordToCheck === reverse? console.log(isPalindromeMessage): console.log(notPalindromeMessage);

// Pag 2 de exercitii

/**
 * Calculează suma pătratelor numerelor de la 1 la 10.
 */
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i * i;
}

console.log(`Suma pătratelor numerelor de la 1 la 10 este: ${sum}`);

/**
 * Determinarea Parității: 
 * Se da un array const nums = [1, 12, 30, 21]
 * Scrie un program care afișează un mesaj 
 * care indică pentru fiecare numar din array dacă numărul este par sau impar.
 */
const nums = [1, 12, 30, 21];

for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        console.log(`${nums[i]} este un număr par.`);
    } else {
        console.log(`${nums[i]} este un număr impar.`);
    }
}

/**
 * Numere Prime în Interval: 
 * Se dau două numere x = 12, y = 35, afișează toate numerele prime din intervalul x, y.
 */
const x = 12;
const y = 35;
console.log(`Numere prime în intervalul ${x} - ${y}:`);
for (let i = x; i <= y; i++) {
    let prime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i);
    }
}

/**
 * Afișarea Tabelului de Multiplicare: 
 * Afiseaza tabelul de multiplicare pentru numerele de la 1 la 10 (tabla inmultirii).
 */
console.log("Tabelul de multiplicare:");

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log(); // Adăugăm o linie goală între fiecare rând pentru claritate
}

/**
 * Jocul de FizzBuzz:
 * Scrie un program care afișează numerele de la 1 la 50. 
 * Pentru fiecare multiplu de 3, afișează "Fizz". 
 * Pentru fiecare multiplu de 5, afișează "Buzz". 
 * Pentru numerele care sunt simultan multipli de 3 și 5, afișează "FizzBuzz".
 */
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


