// Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari


const numbers = [20, 13, 55, 97, 23, 6, 11, 18, 35, 12];

let sum = 0;

for( i = 1; i < numbers.length ; i++){
    if(i % 2 === 1){
        sum += numbers[i]; 
    }
}

console.log(sum);

