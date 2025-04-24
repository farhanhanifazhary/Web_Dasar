/// 1. Menampilkan output js dengan fungsi alert
alert("Yang bikin orang tersigma");

/// 2. Menampilkan output js dengan fungsi console
console.log("Halo ini juga Javascript");

/// 3. Menampilkan output js dengan document.write
document.write("Menampilkan output js dengan document.write");
document.write("<br>");
document.write("<i>Ouput baris kedua dengan document.write</i>");

/// 4. Menampilkan output js dengan inner html
document.getElementById("output").innerHTML = "Materi Javascript";
document.getElementById("date").innerHTML += new Date();

/// 5. Variabel dan Tipe data
var name = "Hanif"; //Variabel yang dideklarasikah dengan var memiliki cakupan fungsi atau global
let age = 19; //let memungkinkankita untuk mendeklarasikan variabel dengan cakupan blok (block scope)
const PI = 3.14; // digunakan untuk mendeklarasikan variabel yang tidk dapat diubah nilainya
///Tipe Data Utama
let greeting = "Hi there"; //String
let score = 90.54; //Number
let isActive = true; //boolean
let vehicle = ["Car", "Motor Cycle", "Ship"];
let person = {name: "Young Hanif", age: 13};

/// 6. Operator dalam Javascript
//Operator Aritmatika
let tambah = 3 + 2; //Penjumlahan
let kurang = 3 - 2; //Pengurangan
let kali = 3 * 2; //Perkalian
let bagi = 3 / 2; //Pembagian

//Operator Perbandingan
console.log(3 == 2); //Sama dengan
console.log(3 != 2); //Tidak sama dengan

//Operator Logika
console.log(true && false); //AND
console.log(true || false); //OR

//Operator Penugasan
let y = 2; //Penugasan standar
y += 4; //Penugasan tambah(y sekarang sama dengan 6)

/// 7. Struktur Kontrol
//Percabangan
// 1. if-else
	
	let nilai = 75;
	if (nilai >= 70) {
		console.log("Lulus");
	}else {
		console.log("Tidak lulus");
	}
	
// 2. switch-case

	let hari = 3;
	switch(hari) {
		case 1:
			console.log("Senin");
			break;
		case 2:
			console.log("Selasa");
			break;
		case 3:
			console.log("Rabu");
			break;
		default:
			console.log("Hari tidak valid");
	}
	
/// 8. Perulangan
//For
	for (let i = 0; i < 5; i++) {
		console.log(i);
	}

//While
	let j = 0;
	while (j < 5) {
		console.log(j);
		j++;
	}

//do-while
	let k = 0;
	do {
		console.log(k);
		k++;
	} while (k < 5);

//foreach
	let buah = ["Apel", "Pisang", "Ceri"];
	buah.forEach(function(element) {
		console.log(element);
	});

/// 8. Fungsi dalam Javascript

	// Mendefinisikan Fungsi
	function greet(name) {
		return "Hello, " + name + "!";
	}
	// Parameter dan Return Value
	let message = greet("Alice");
	console.log(message);
	
	//Arrow Function
	const add = (a, b) => a + b;
	console.log(add(5, 3));

/// 9. DOM Manipulasi
document.addEventListener("DOMContentLoaded", () => {
    let header = document.getElementById("myHeader");
    if (header) {
        header.innerHTML = "Selamat Datang!";
        header.addEventListener("click", function() {
            alert("Header diklik!");
        });
    }

    let myButton = document.getElementById("myButton");
    let output = document.getElementById("output");
    if (myButton && output) {
        myButton.addEventListener("click", function() {
            output.textContent = "Tombol telah berhasil diklik!";
        });
    }
});

/// 10. File Handling

document.getElementById("myButton2").addEventListener("click", function() {
        document.getElementById("output2").textContent = "Tombol telah berhasil diklik!";
    });

/// 11. Array & Object
let person2 = { name: "Hanif", age: 19 };
person2.email = "farhanhanifazhary@gmail.com";
console.log(person2.name);
person2.greet = function() {
    console.log("Hello, " + this.name);
};
person2.greet();

/// 12. ES6 Features
let x2 = 10;
if (true) {
    let x2 = 20;
    console.log(x2);
}
console.log(x2);

const PI2 = 3.14;
// PI2 = 3.15; // Error

let name2 = "Alice";
console.log(`Hello, ${name2}!`);

const array = [1, 2, 3];
const [a, b] = array;

const person3 = { name: "Hanif", age: 19 };
const { name: n, age: ag } = person3;

const arr1 = [1, 2];
const arr2 = [3, 4];
const merged = [...arr1, ...arr2];

let promise = new Promise((resolve, reject) => {
  resolve("Selesai");
});
promise.then(result => console.log(result));

async function fetchData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data);
}

/// 12. JSON & Fetch API
const person4 = { name: "John", age: 30 };
const jsonString = JSON.stringify(person4);
console.log(jsonString);

const parsedData = JSON.parse(jsonString);
console.log(parsedData.name);

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Terjadi kesalahan:", error));

// Debugging
let x3 = 5;
console.log(x3);