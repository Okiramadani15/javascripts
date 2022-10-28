//secara default paramater di function itu optional 
//artinya kita tidak wajib mengisi value ketika memanggil fucnction
//jika tidak ada value yang kita kirim ke parameter ketika memanggil function,
//maka parameter tersebut bernilai undefined

function sayHi ( firstname, middlename, lastname) {

  console.log ( firstname); 
  console.log ( middlename);
  console.log ( lastname);

}

sayHi ("oki");