let num = [5, 8, 2, 9, 3];
num.sort();
num.push(1);
console.log(num);
console.log(`nosso vetor tem ${num.length} posições`);
console.log(`O primeiro valor do array é ${num[0]}`);
let pos = num.indexOf(8);
console.log(`O valor 8 está na posição ${pos}`)