//rest parameter adalah fitur dimana kita bisa mengirim data sebanyak2nya
  //pada satu parameter secara otomatis akan di konversi menjadi array 
//rest paramater memiliki ketentuan 
  //rest parameter hanya boleh ada di satu function, tidak boleh dari satu 
  //rest parameter hanya boleh berada di posisi paling akhir tidak boleh di depan atau di tengah 
    //kecuali memang satu parameter
//di bahasa pemograman lain, ada juga yang bilang ini adalah variable argument 

function sum (name, ...data) {
  let total = 0
  for ( const item of data ) {
        total += item; 
  }
  document.writeln ( `<p>total ${name} is ${total }</p>`);
}

sum (`orange`,2,3,4,6,7,8);
sum (`apple`,5,5,6,7,5,6);
sum (`banana`,9,5,2,3,4);

let value = [10,10,10,10,10];
sum ( "test", ...value); //dapat dijumlahakan akibat penambahan titik 3 kali (...)



//SPREAD SYNTAX
//kadang kita terlanjur memliki data array 
//tapi untungnya kita juga bisa mengirim array ke rest parameter 
//kita bisa gunakan (...(titik tiga kali )) diikuti dengan array nya kita memanggil function
//fitur ini dinamakan spread syntax

