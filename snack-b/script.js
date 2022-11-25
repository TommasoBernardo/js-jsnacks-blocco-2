//Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

let numbers = parseInt(prompt('inserisci un numero'));

if((numbers % 2) === 0){
    console.log(numbers);
}else{
    numbers= numbers + 1;
    console.log(numbers);
}

