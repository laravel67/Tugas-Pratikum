// Mengganti dengan 2 angka di belakang NIM Anda
const nim = "042839649";
const twoDigitNIM = nim.slice(-2);

// Mengonversi 2 digit terakhir NIM ke dalam bentuk angka
const initialValue = parseInt(twoDigitNIM);

if (initialValue % 2 !== 0) {
  let currentNumber = initialValue;
  
  while (currentNumber >= 20) {
    console.log(currentNumber);
    currentNumber--;
  }
} else {
  console.log("Angka terakhir dari NIM Anda adalah genap, tidak dapat menggunakan while loop.");
}
