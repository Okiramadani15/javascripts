//tidak ada batasan dimana kita bisa membuat function 
  //termasuk jika kita ingin membuat function didalam sebuah function
//function yang ada didalam kita sebut inner function 
//inner function hanya bisa diakses ditempat kita membuat functionya, tidak bisa diakses diluar functionya

function outter(){

  function inner(){
    document.writeln("<p>inner (didalam )</p>")
  }

    inner();
    inner();
}

outter();
//jika kita mencoba mengaskes function inner di luar outter akan error karena hanya dapat diakses didalam 
  
