/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message
}
console.log(checkAge());

// 1-mettendo un età mi uscirà il messaggio se sono giovane o se ho più di 18 anni
// 2-manca il return e il console log


// ESERCIZIO 2
function printColorsNumber() {
     const colors = ['blue', 'red', 'yellow', 'green', 'black'];
     console.log(`Nella mia palette ci sono ${colors.length} colori!`);
 }
printColorsNumber();

// 1 - stampare la quantità di colori
// 2 - sì. Length non è scritto correttamente.
// 3 - no


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;
 
    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1 - stampare la somma del numero che mette l'utente + 12
// 2 - sì. manca il parseInT
// 3 - Sì. senza il parseInt con lo riconosce come numero ma come stringa


// ESERCIZIO 4
function checkAccess() {
    const addresses = [
        'mymail@mail.com',
        'yourmail@mail.com',
        'hermail@mail.com',
        'hismail@mail.com',
    ];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1 - controllare se un utente può accedere o no.
// 2 - sì. togliere le stringhe ai true e false.