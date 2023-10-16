var total = 0;
var isOddIteration = true; // Untuk menentukan apakah ini perulangan bilangan ganjil atau genap
for (var i = 1; i <= 100; i++) {
    if (i % 10 === 1) {
        console.log("Perulangan 10 ke-".concat(Math.ceil(i / 10), ":"));
    }
    if (isOddIteration && i % 2 === 1) {
        console.log(i);
        total += i;
    }
    else if (!isOddIteration && i % 2 === 0) {
        console.log(i);
        total += i;
    }
    if (i % 10 === 0) {
        console.log("Jumlah: ".concat(total));
        console.log('--------------------------');
        total = 0;
        isOddIteration = !isOddIteration; // Bergantian antara ganjil dan genap setiap 10 bilangan
    }
}
