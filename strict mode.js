//saat kita menjalankan kode program jva scripts secara default kode program kita berjalan dalam mode tidak strict, atau sloppy mode
//pada ECMA scripts 5, diperkenalakan mode strict, dimana ketika mode strict dijalankan, maka akan merubah beberapa cara kerja di javascript seperti :
//merubah beberapa javacsript error dari yang tadi nya silent error menjadi throw error (terlihat )
//memperbaiki beberapa kesalahan engine javascriptsuntuk optimisasi
//menolak beberapa kode perintah yang kedepanya akan digunakan di ECMAscripts

//cara menyalakan strict mode
//cara melnyalakan strict mode, kita bisa tambahkan `use strict` pada baris bawah awal file javascripts
//atau bisa juga ditambahkan di awal function kita

//contoh penggunaan strict

function useStrictMode() {
  "use strict";
  const person = {
    firstName: "oki",
  };

  //error pada with
  with (person) {
    console.info(firstName);
  }
}

useStrictMode();
