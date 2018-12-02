//no. 1
console.log('no.1 --------------')

console.log('LOOPING PERTAMA')
var i=2;
while(i<21) {
    console.log(i+' - I love coding');
    i+=2;
}

console.log('LOOPING KEDUA')
var j=20;
while(j>0) {
    console.log(j+' - I will become fullstack developer');
    j-=2;
}

//no.2
console.log('no.2 --------------')

console.log('LOOPING PERTAMA')
var k=1;
for (k=1; k<21; k++) {
    console.log(k+' - I love coding');
}
console.log('LOOPING KEDUA')
var l=20;
for (l=20; l>0; l--) { //oke, bikin grafik penjelasan struktur start, end dan increment yg bener
    console.log(l+' - I will become fullstack developer');
}

//no.3
console.log('no.3 --------------')

var counter = 1;
for (counter=1; counter<=100; counter++) {
    countera = counter;
    if(countera%2==1) {
        console.log('nilai counter = '+countera+' dan bernilai GANJIL')
    }else{
        console.log('nilai counter = '+countera+' dan bernilai GENAP')
    }
}
console.log('--------------')

var counter = 1;
for (counter=1; counter<=100; counter+=2) {
    countera = counter;
    if(countera%3==0) {
        console.log('nilai counter = '+countera+' dan bernilai mrupakan KELIPATAN DARI 3')
    }
}

console.log('--------------')

var counter = 1;
for (counter=1; counter<=100; counter+=5) {
    countera = counter;
    if(countera%6==0) {
        console.log('nilai counter = '+countera+' dan bernilai mrupakan KELIPATAN DARI 6')
    }
}

console.log('--------------')

var counter = 1;
for (counter=1; counter<=100; counter+=9) {
    countera = counter;
    if(countera%10==0) {
        console.log('nilai counter = '+countera+' dan bernilai mrupakan KELIPATAN DARI 10')
    }
}
