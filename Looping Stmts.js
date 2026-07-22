// For loop
for (let i = 1; i <= 5; i++) {
    process.stdout ? process.stdout.write(i + " ") : console.log(i);
}
console.log();

// While loop
let j = 1;
while (j <= 5) {
    console.log(j);
    j++;
}

// Do-while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);