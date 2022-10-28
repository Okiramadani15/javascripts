//arrow function adalah alternatif pembuatan function yang lebih sederhana dari function biasanya
//namunterdapat limitisasidan juga tidak bisa digunakan di semua situasi
//dinamakan arrow function dikarenakan menggunakan tanda => (seperti tanda panah)
//beberapa contoh kekurangan arrow function :
    //- tidak memilki fitur argument 
    //-tidak bisa menggunakn function generator 
    //-tidak bisa mengakses this 
    //- tidak bisa mengakses super 

//coontoh
let sayHi =  (name) =>{
  let say = `hello ${name}`;
  document.writeln(say  )
}

sayHi("oki");  

//arrow function tanpa blok 
//jika sebuah arrow function isinya sederhana, misalnya hanya satu baris
//kita bisa membuat arrow function tanpa harus menggunakan blok ({})

let sayHello =  (name) => document.writeln(`<p>heloo ${name}</p>` ); 
sayHello("oki");  

//arrow fuction return value
//arrow function bisa mengembalikan value, function yang sama seperti function biasanya
//jika menggunakan blok, maka kita perlu menggunkan kata kunci return 
//jika tidak menggunakan block, kita tidak perlu menggunakan kata kunci return 

let sum = ( first , second ) => first + second;
document.writeln ( sum (10 ,10));   

// arrow function tanpa kurung parameter 
 // jika  parameter di arrow function hanya satu, kita bisa tidak menggunakan   kurung pada parameter

 let hiOki = name => document.writeln(`<p>hi${name}</p>`);
 hiOki("oki");

 // arrow function sebagai parameter
  //karena arrow function sama seperti anonymous function 
  //jadi kita bisa menggunakan arrow function sebagai parameter function lain 

function giveMeName ( callback ) {
  callback ("oki ")
}
giveMeName((name)=> document.writeln(`<p> hi ${name}</p>`));


