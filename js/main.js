/**
 * PROVA
 * ! PROVA
 * ? PROVA
 * // PROVA
 * # PROVA
 * @PROVA
 * *PROVA
 */

/***************************************/

/**
 * # TRACCIA

*Scrivi un programma che stampi i numeri da 1 a 100,

** ma per i multipli di 3 stampi “Fizz” al posto del numero 

** e per i multipli di 5 stampi Buzz.

** Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

Prima di partire a scrivere codice poniamoci qualche domanda:
* ? Come faccio a sapere se un numero è divisibile per?
* ? Abbiamo visto qualcosa di particolare che possiamo usare?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

 */

/***************************************/

// # PSEUDOCODICE

/* PER OGNI VOLTA (FOR) che stampi un numero da 1 a 100 (Number)
/*      SE (Number) diviso 3 da resto pari a 0  
            stampa numero come “Fizz”
/*      SE (Number) diviso 5 da resto pari a 0   
            stampa numero come "Buzz"
/*      ALTRIMENTI SE (Number) entrambi i multipli di 3 e 5 sono validi 
            stampa numero come "FizzBuzz"
*/

// # PROCEDURA

for (let number = 1; number <= 100; number++) {
  const fizz = number % 3 === 0;
  const buzz = number % 5 === 0;
  const fizzbuzz = fizz && buzz;

  if (fizz) {
    console.log(number + " " + "Fizz");
  }

  if (buzz) {
    console.log(number + " " + "Buzz");
  }

  if (fizzbuzz) {
    console.log(number + " " + "FizzBuzz");
  }
}

// for (let number = 1; number <= 100; number++) {
//   if ((fizz = number % 3 === 0)) {
//     console.log(fizz);
//   }

//   if (number % 5 === 0) {
//   }

//   console.log(number);
// }
