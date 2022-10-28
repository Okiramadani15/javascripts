//scope merupakan area akses sebuah data
//ada dua jenis scope yaitu scope local dan scope global 
//setiap kita membuat function maka kita akan membuat scope local untuk function tersebut 
//data di global scope bisa diakses dari local scope, namun data di local scope
  //hanya bisa diakses di local scope tersebut atau di local scope dibawahnya ( functon dalam function )
 
//global scope 
let counter = 0

function crashed (){
      //local scope function crashed hanya untuk mengkases function crashed saja karena local  
  counter++;// semua bisa mengaksenya karena global 

}

crashed();
crashed();
crashed();
crashed();

document.writeln (counter);