var nama='jono';
var peran='Taib';
var bol = false;
console.log(nama == false)


if (nama == false) {
    console.log('Nama harus diisi!')
}else if(nama == false && peran == false){
    console.log('Nama harus diisi!')
}else if(nama != false && peran == false) {
    console.log("Halo",nama,", Pilih peranmu untuk memulai game!")
}else if(nama != false && peran == 'Ksatria') {
    console.log("Selamat datang di Dunia Proxytia,", nama)
    console.log("Halo Ksatria",nama,"kamu dapat menyerang dengan senjatamu!")
}else if(nama != false && peran == 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia,", nama)
    console.log("Halo Tabib",nama,"kamu dapat menyerang dengan senjatamu!")
}else if(nama != false && peran == 'Penyihir') {
    console.log("Selamat datang di Dunia Proxytia,", nama)
    console.log("Halo Penyihir",nama,"kamu dapat menyerang dengan senjatamu!")
}else{
    console.log("Selamat datang di Dunia Proxytia,", nama)
    console.log("Kamu hanya bisa memilih Ksatria, Tabib atau Penyihir untuk karaktermu")
}

//logika udah kelar. tinggal perbaik aja mirip di js bin dan pake === atau == yg bener
/*
var nama='prapto';
var peran='Ksatria';

if (nama === false && peran === false) {
    console.log('Nama harus diisi!')
}else if(nama != false && peran == false) {
    console.log("Halo "+nama+", Pilih peranmu untuk memulai game!")
}else if(nama !== false && peran == 'Ksatria') {
    console.log("Selamat datang di Dunia Proxytia, "+nama+". \n Halo Ksatria "+nama+" kamu dapat menyerang dengan senjatamu!")
}else if(nama !== false && peran == 'Tabib') {
    console.log("Selamat datang di Dunia Proxytia,", nama,"Halo Tabib",nama,"kamu dapat menyerang dengan senjatamu!")
}else if(nama !== false && peran == 'Penyihir') {
    console.log("Selamat datang di Dunia Proxytia,", nama,"Halo penyihir",nama,"kamu dapat menyerang dengan senjatamu!")
}else{
    console.log('masih salah')
}
*/