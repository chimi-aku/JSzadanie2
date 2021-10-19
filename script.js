// 1
let word = '';

for(let i = 1; i <= 100; i++) {
    console.log(i);
    if(i % 2 == 0 && i % 3 == 0) word += 'Fizbuz';
    else if (i % 2 == 0) word += 'Fiz';
    else if (i % 3 == 0) word += 'Buz';
    else word += i;
}

console.log(word);


//2
//const R = window.prompt('Podaj liczbę: ', 0) ;
const R = 0;
const area = Math.round(Math.PI * R * R * 100) / 100;
const circuit = Math.round(Math.PI * 2 * R * 100) / 100;
console.log('Pole:', area);
console.log('Circuit: ', circuit);


//3
let arr = [];

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function filluprandomarr(arr) {
    let sum = 0;
    i = 0;
    while(sum < 200){
        arr[i] = getRandomIntInclusive(1, 10);
        sum += arr[i]
        i++;
    }
}

filluprandomarr(arr);
console.log(arr);

function deleteFirstLowest(arr) {
    let lowestNum = 100;
    for(const num of arr){
        if(num < lowestNum) lowestNum = num;
    }

    index = arr.indexOf(lowestNum);
    arr.splice(index, 1);
}

deleteFirstLowest(arr);
console.log(arr);

function deleteLastHighest(arr) {
    let highestNum = -100;
    for(const num of arr){
        if(num >= highestNum) highestNum = num;
    }

    index = arr.indexOf(highestNum);
    arr.splice(index, 1);
}

deleteLastHighest(arr);
console.log(arr);

function moveFirstTen(arr) {
    arr.push(arr.shift());
}

//moveFirstTen();
console.log(arr);