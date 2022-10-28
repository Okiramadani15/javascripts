//switch expression  adalah sebuah percabangan sama seperti if namun lebih sederhana cara pembuatanya 
// kondisi switch expression hanya untuk perbandingan ==
//contoh kejadian switch expression : 
let nilai = "  ";
switch (nilai ) {
// switch adalah semacam bagian if pada percabangan
   case "A" :
      document.writeln ("<p> GREAT JOB</p>"); 
      break;   
   case "B" :
   case "C" :
      document.writeln ("<p> good job </p>");
      break;
   case "D" :
   document.writeln ("<p> sorry you lose </p>");
   break; 
   
   default :
   document.writeln ("<p> try again  </p>");
   // default adalah semacam bagian else pada percabangan
}  
