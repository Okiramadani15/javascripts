//adalah salah satu kata kunci yang bisa digunakan untuk melakukan perulangan 
//blok kode yang terdapat di dalam for akan selalu diulangi selama kondisi for terpenuhi

// sintak perulangan for : 
// for (init statment; kondisi; post statment ){
//   (//) block perulangan 
//   } (seperti pada if )

//contoh  
//perulangan yang tidak berhenti 

//for (;;) {
  // alert ("for loop");
//}

//perulangan menggunakan for 
let counter = 1;
for (; counter <= 10; counter++){
   document.writeln (`<p>perulangan ke ${counter}</p>`);
   
}

