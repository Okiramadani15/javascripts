//pada switch statment kita sudah mengenal kata kunci break, yaitu untuk menghentikan case dalam switch 
//sama pada perulangan, break juga dingunakan untuk menghentikan seluruh perulangan.
// namun berbeda dengan continue continue digunakan untuk menghentikan perulangan saat ini, 
//lalu melanjutkan ke perulangan selanjutnya

//contoh kode break 
let counter = 1;
   
   while (true){
      document.writeln(`<p> perulangan ke ${counter}</p>`)
      counter++;

   if (counter > 15){
      break;
   }   
   }

document.writeln("<p>batas break atas dan continue bawah</p>");

//contoh kode continue
for (let i = 1; i <=10; i++) {
   if (i%2 === 0){
      continue;
   }
   document.writeln (`<p>perluangan ganjil ${i}</p>`)
}