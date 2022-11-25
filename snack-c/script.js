//Calcola la somma dei primi 10 numeri di un array.


const numbers = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10, 5, 8, 34, 89,5];

let sum = 0;

let media = 0;

for(let i = 0 ; i < 10 ; i++){
    sum += numbers[i];
    media =sum/[i];
}

console.log(sum);
console.log(media);


