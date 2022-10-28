//secara default function itu tidak menghasilkan value apapun, namun jika kita ingin, kita dapat
  //membuat sebuah function mengembalikan value
//agar functon bisa menghasilkan value kita bisa menggunakan kata kunci return di dalam functionya.
//dan di dalam blok function, untuk  menghasilkan nilai tersebut, kita harus menggunakan kata kunci 
  //return, lalu diikuti dengan data yang ingin kita hasilkan.
//functionya hanya bisa mengembalikan satu data, jika kita ingin mengembalikan beberapa data sekaligus
  //kita bisa menggunakan array sebagai return value

  //membuat function dengan parameter dan return value
  function sayHi (firstname, lastname){
    let say =`hello ${firstname} ${lastname}`;
    return say
  }

  //memanggil functon dan menangkap return valuenya
  let result = sayHi ("oki ", "rama");
  document.writeln( `<p> ${result}</p>`);

//contoh 2 : 

function getHasil (hasil){

  if ( hasil > 90 ){
   return "A";

  } else if( hasil > 80){
    return "B";
  } else if( hasil > 70){
    return "C";
  } else {
    return "E"
    }
  }
   let hasil = getHasil (95);
   document.writeln (`<p> ${hasil}</p>`);

//untuk menghentikan eksekusi return (program )
  //saat kita menggunakan kata kunci return, maka kode setelah return tersebut tidak dapat di eksekusi 
  //kita bisa menngunakan return untuk menghentikan eksekusi sebuah function 

//kode menghentikan return 
function isContains (array, searchValue){
  for (let element of array) {
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

let array = [1,23,74, 86,90,102];
let search = 23; 
let found = isContains( array, search);
document.writeln (`<p>${found}</p>`);
