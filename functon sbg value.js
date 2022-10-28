//function tidak hanya digunakan sebagai kode program yang di eksekusi, tapi juga sebagai value 
//artinya, function bisa disimpan di variable, bisa juga dikirim melalui parameter ke function lainnya

function sayHi ( name) {
  document.writeln ( `<p>hello ${name}</p> `);

}

let say = sayHi; // ketika sudah di tambahkan fuction say  maka sudah bisa mengunakan functon say 
                // untuk meamanggil nilai functon 

sayHi ( "oki");
say ("dani");