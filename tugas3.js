var nama='jj';
var peran='';

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
