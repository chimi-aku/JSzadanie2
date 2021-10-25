// 1
console.log('***************1***************')
let word = '';

for(let i = 1; i <= 100; i++) {
    //console.log(i);
    if(i % 2 == 0 && i % 3 == 0) word += 'Fizbuz';
    else if (i % 2 == 0) word += 'Fiz';
    else if (i % 3 == 0) word += 'Buz';
    else word += i;
}

console.log(word);


//2
console.log('***************2***************')
const R = window.prompt('Podaj liczbę: ', 0) ;
//const R = 0;
const area = Math.round(Math.PI * R * R * 100) / 100;
const circuit = Math.round(Math.PI * 2 * R * 100) / 100;
console.log('Pole:', area);
console.log('Circuit: ', circuit);


//3
console.log('***************3***************')
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


const moveFirstTen = arr => {
    let newArr = arr
    let firstTen = newArr.splice(0,10);

    for(const el of firstTen)
        newArr.push(el);
    return newArr;
}

moveFirstTen(arr);
console.log(arr);


//4
console.log('***************4***************')
const names = ['Geralt', 'Yennefer', 'Vesemir', 'Jaskier', 'Francesca', 'Kazimierz'];

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

console.log(names);
for(let i = 0; i < names.length; i++) {
    names[i] = names[i].replace(/a/g, '4');
    names[i] = names[i].replace(/A/g, '4');
    names[i] = names[i].replace(/e/g, '3');
    names[i] = names[i].replace(/E/g, '3');

    if(names[i].length > 6) {
        const l = names[i].length;
        for(let j = 3; j < l - 3; j++)
            names[i] = names[i].replaceAt(j, ".");

    }
}

console.log(names);

//5
console.log('***************5***************')

const products = 'jajka, mleko, masło, chleb, szynka, siemię lniane';
const productsArr = products.split(', ');

console.log(productsArr)
productsWithPrices = {};

for(const key of productsArr) {
    productsWithPrices[key] = getRandomIntInclusive(100, 2000) / 100;
}

console.log(productsWithPrices);

const list = []
const size = Object.keys(productsWithPrices).length;

for(const product in productsWithPrices) {
    if(list.length >= Math.floor(size / 2))break;

    if(getRandomIntInclusive(1, 10) % 2 == 0) {
        list.push(product);
    }
}

console.log(list);




