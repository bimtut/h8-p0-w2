// LOOPING PERTAMA
// 2 - I love coding
// 4 - I love coding
// 6 - I love coding
// 8 - I love coding
// 10 - I love coding
// 12 - I love coding
// 14 - I love coding
// 16 - I love coding
// 18 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 18 - I will become fullstack developer                                                                              
// 16 - I will become fullstack developer
// 14 - I will become fullstack developer
// 12 - I will become fullstack developer
// 10 - I will become fullstack developer
// 8 - I will become fullstack developer
// 6 - I will become fullstack developer
// 4 - I will become fullstack developer
// 2 - I will become fullstack developer

function loop (num) {
    for (var i = 2; i <= num; i = i+2) {
        console.log(i + ' - I love coding')
    }

    for (var j = num; j > 0; j = j-2)
    console.log(j + ' - I will become fullstack developer')
} 

loop(20)

console.log('-----------------------')

// LOOPING PERTAMA
// 1 - I love coding
// 2 - I love coding
// 3 - I love coding
// 4 - I love coding
// 5 - I love coding 
// 6 - I love coding
// 7 - I love coding
// 8 - I love coding
// 9 - I love coding
// 10 - I love coding
// 11 - I love coding
// 12 - I love coding 
// 13 - I love coding
// 14 - I love coding
// 15 - I love coding
// 16 - I love coding
// 17 - I love coding
// 18 - I love coding
// 19 - I love coding
// 20 - I love coding
// LOOPING KEDUA
// 20 - I will become fullstack developer
// 19 - I will become fullstack developer
// 18 - I will become fullstack developer
// 17 - I will become fullstack developer
// 16 - I will become fullstack developer
// 15 - I will become fullstack developer
// 14 - I will become fullstack developer
// 13 - I will become fullstack developer
// 12 - I will become fullstack developer
// 11 - I will become fullstack developer
// 10 - I will become fullstack developer
// 9 - I will become fullstack developer
// 8 - I will become fullstack developer
// 7 - I will become fullstack developer
// 6 - I will become fullstack developer
// 5 - I will become fullstack developer
// 4 - I will become fullstack developer
// 3 - I will become fullstack developer
// 2 - I will become fullstack developer
// 1 - I will become fullstack developer

function loope (num) {
    for (var i = 1; i <= num; i++) {
        console.log(i + ' - I love coding')
    }

    for (var j = num; j > 0; j--) {
        console.log(j + ' - I will become fullstack developer')
    }
}

loope (20)

console.log('----------------------')

function ganjil (num) {
    console.log('cek ganjil - genap')
    for (var i = 1; i <= num; i++) {
        if (i % 2 == 1) {
            console.log('bilangan '+ i + ' adalah GANJIL')
        } else {
            console.log('bilangan '+ i +' adalah GENAP')
        }
    } 

    console.log('counter 2')
    for (var i = 1; i <= num; i = i + 2) {
        if (i % 3 == 0) {
            console.log('bilangan '+ i +' adalah kelipatan 3')
        }
    }

    console.log('counter 5')
    for (var i = 1; i <= num; i = i + 5) {
        if (i % 6 == 0) {
            console.log('bilangan '+ i +' adalah kelipatan 6')
        }
    }

    console.log('counter 9')
    for (var i = 1; i <= num; i = i + 9) {
        if (i % 10 == 0) {
            console.log('bilangan '+ i +' adalah kelipatan 10')
        }
    }
}

ganjil (100)