// Jumlahkan semua angka genap dalam array berikut
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
let resultOne

// Buat function untuk menjumlahkan angka genap
function sumEvenNumbers(array) {
  let resultOne = 0

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 === 0) {
      resultOne = resultOne + array[index]
    }
  }
  // console.log(numbers)
  console.log(`Hasil penjumlahan semua angka genap pada array "numbers" adalah : ${resultOne}`)
}

sumEvenNumbers(numbers)

const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8];
//Tambahkan semua angka ganjil dalam array dan kembalikan hasilnya.
let resultTwo

// Buat function untuk menjumlahkan angka ganjil dan kembalikan hasilnya
function sumOddNumbers(array) {
  let result = 0

  for (let index = 0; index < array.length; index++) {
    if (array[index] % 2 !== 0) {
      result = result + array[index]
    }
  }
  return result
}

resultTwo = sumOddNumbers(numbersTwo)
console.log(`Hasil penjumlahan semua angka ganjil pada array "numbersTwo" adalah : ${resultTwo}`)


// Ubah semua huruf kecil dalam array menjadi huruf besar
let students = ["Tito", "arY", "Bostang"]
let resultThree

// Buat function untuk mengubah huruf kecil menjadi huruf besar
function convertToUppercase(array) {
  let convertResult = []

  for (let index = 0; index < array.length; index++) {
    convertResult.push(array[index].toUpperCase())
  }

  return convertResult
  // console.log(`Array "students" yang sudah di convert menjadi huruf besar: ${convertResult}`);
}

console.log(students)
resultThree = convertToUppercase(students)
console.log(resultThree)
// console.log("Array students yang sudah di convert menjadi huruf besar: " + resultThree);

// Ambil hanya nama-nama orang yang umurnya di atas 18 tahun.
// Ambil hanya orang yang panjang namanya lebih dari 5
const people = [
    { name: 'Andi', age: 17 },
    { name: 'Tito Alexsta', age: 20 },
    { name: 'Bostang', age: 22 },
    { name: 'Cici', age: 17 }
];

// Function 1: Ambil nama orang yang age > 18
function getAdults(array) {
  let result = []

  for (let index = 0; index < array.length; index++) {
    if (array[index].age > 18) {
      result.push(array[index].name)
    }
  }

  console.log("Orang yang umurnya di atas 18:", result)
}

// Function 2: Ambil nama orang yang panjang namanya lebih dari 5
function getFiveOverNames(array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index].name.length > 5) {
      result.push(array[index].name);
    }
  }

  console.log("Orang dengan nama lebih dari 5 karakter:", result);
}

// Panggil Kedua Fungsi
getAdults(people);
getFiveOverNames(people);


// Hitung total harga semua barang
const items = [
    { name: 'Book', price: 10000 },
    { name: 'Pen', price: 5000 },
    { name: 'Pencil', price: 3000 },
];

// Buat Function untuk menghitung total harga
function calculateTotalPrice(array) {
  let totalPrice = 0;

  for (let index = 0; index < array.length; index++) {
    totalPrice = totalPrice + array[index].price;
  }

  console.log("Total harga semua barang:", totalPrice);
}

calculateTotalPrice(items);


//Ambil hanya angka unik dari array (hapus duplikat).
const numbersThree = [1, 2, 2, 3, 4, 4, 5];

// Buat Function untuk mengambil angka unik
function getUniqueNumbers(array) {
  let uniqueResults = [];

  for (let index = 0; index < array.length; index++) {
    if (!uniqueResults.includes(array[index])) {
      uniqueResults.push(array[index]);
    }
  }

  console.log("Angka unik:", uniqueResults);
}

getUniqueNumbers(numbersThree);

// Ambil nama produk dengan harga tertinggi
const products = [
    { name: 'Laptop', price: 15000000 },
    { name: 'Phone', price: 8000000 },
    { name: 'Monitor', price: 3000000 },
];

// Buat Function untuk mengambil nama produk dengan harga tertinggi
function getMostExpensiveProduct(array) {
  let maxPrice = 0;
  let mostExpensiveName = "";

  for (let index = 0; index < array.length; index++) {
    if (array[index].price > maxPrice) {
      maxPrice = array[index].price;
      mostExpensiveName = array[index].name;
    }
  }

  console.log("Produk dengan harga tertinggi:", mostExpensiveName);
}

getMostExpensiveProduct(products);


// Buat kalimat dari array kata.
const words = ['Belajar', 'array', 'itu', 'menyenangkan'];

// Function untuk membuat kalimat dari array
function makeSentenceFromArray(array) {
  let sentence = "";

  for (let index = 0; index < array.length; index++) {
    sentence = sentence + array[index];

    // Tambahkan spasi jika bukan kata terakhir
    if (index < array.length - 1) {
      sentence = sentence + " ";
    }
  }

  console.log("Kalimat:", sentence);
}

makeSentenceFromArray(words);


// Ambil hanya 3 data pertama yang mengandung kata 'a' pada nama.
const names = ['Aldo', 'Budi', 'Caca', 'Dinda', 'Eka', 'Fajar'];

// Function untuk mengambil 3 nama pertama yang mengandung huruf 'a'
function getFirstThreeWithAs(array) {
  let firstThreeResults = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index].toLowerCase().includes('a')) {
      firstThreeResults.push(array[index]);
    }

    if (firstThreeResults.length === 3) {
      break;
    }
  }

  console.log("3 nama pertama yang mengandung huruf 'a':", firstThreeResults);
}

getFirstThreeWithAs(names);

// Hitung total karakter dari semua nama dalam array.
const namesTwo = ['Ani', 'Budi', 'Citra']; // 12 karakter

// Function untuk menghitung semua karakter dari semua nama dalam array
function countTotalCharacters(array) {
  let totalChars = 0;

  for (let index = 0; index < array.length; index++) {
    totalChars = totalChars + array[index].length;
  }

  console.log("Total karakter:", totalChars);
}

countTotalCharacters(namesTwo);

// Output: ['Tono (22)', 'Tara (25)']
// Ubah array objek ke array string dengan format 'Nama (Umur)' dan hanya yang umurnya di atas 21.
const peopleTwo = [
    { name: 'Tono', age: 22 },
    { name: 'Tini', age: 19 },
    { name: 'Tara', age: 25 },
];

// Function untuk mengubah array objek ke array string dengan format 'Nama (Umur)'
function formatAdultsOverTwone(array) {
  let result = [];

  for (let index = 0; index < array.length; index++) {
    if (array[index].age > 21) {
      let formatted = array[index].name + " (" + array[index].age + ")";
      result.push(formatted);
    }
  }

  return result;
}

let peopleTwoResults = formatAdultsOverTwone(peopleTwo);
console.log(peopleTwoResults); 
