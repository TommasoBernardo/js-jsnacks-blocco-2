/*
    Crea un array vuoto.
    Chiedi per 6 volte all'utente di inserire un numero,
    se è dispari inseriscilo nell'array.
*/

const numbers = [];

for(let i = 0 ; i < 6 ; i++){
    let user = prompt('inserisci un numero');

    if((user % 2) === 0){
        console.log('il numero è pari');
    }else{
        number.push(user);
        console.log('il numero è dispari');
    }
}

console.log(numbers);
