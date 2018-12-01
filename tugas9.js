//no1
function shoutOut() {
    return "Halo Function!";
}

console.log(shoutOut()) // Menampilkan "Halo Function!" di console

console.log('---------------------');

//no2
var num1 = 5;
var num2 = 6;
function calculateMultiply() {
    return num1*num2;
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

console.log('-------------------');

//no3
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
function processSentence(name, age, address, hobby) {
    return "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hobby+"!";
}

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan 