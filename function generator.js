//function generator adalah function yang digunakan untuk membuat generator 
//generator adalah data yang bisa di interasi seperti array 
//untuk membuat function generator, kita perlu menggunakan tanda * (bintang ) setelah kata function
//dan mengembalikan data disetiap iterasi, kita bisa gunakan kata kunci yeild diikuti datanya 

function* createNames () {
  yield  "oki";
  yield  "rama";
  yield  "dani";
}

let names = createNames();  
 for (let name of names) {
  console.log(name);
 }

 //contoh 2 
function* susahNih (value){
  for ( i=1 ; i <= value; i++ ){
    if ( i % 2 ===1) {
      yield i; 
    }
  }
}
let numbers = susahNih (100); 
  for ( let number of numbers){
    console.log ( number); 
  }

  // sifat generator lazy evaluation 
  //jadi ketika data belum kita ambil dari generator, maka yeild selanjutnya tidak akan di eksekusi 