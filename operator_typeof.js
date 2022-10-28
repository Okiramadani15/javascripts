//operator typeof adalah operator yang bisa kita gunakan untuk melihat tipe data sebuah value
//atau variable 

let doc;

const typedata = typeof doc;  
document.writeln (`<p>${typedata}</p>`);



//cara yang lain menggunakan if  else 
let data;

 if (typeof data == "number") {
    alert ("number");

 } else if (typeof data == "string") {
   alert ("string");

 } else if (typeof data == "boolean"){
   alert ("boolean");

 } else if (typeof data == "object") {
   alert ("object");

 }

