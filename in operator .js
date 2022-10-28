//operator in adalah operator yang bisa dilakukan untuk mengecek apakah sebuah property ada di dalam 
//object atau tidak 

// jika property tersebut ada didalm object maka bernilai true
// jika property tersebut ada diluar object maka bernilai false
// tidak hanya di object, ini juga bisa digunakan untuk mengecek index array 
 
const person = {
  firstname: "oki  ", // diluar variable tersebut maka akan properti dinyatan tidak ada 
  lastname: "dhani"
} ;
 if ("firstname" in person ) {
    alert (`hi ${person.firstname}`);
 }else {
  alert ("hello");  
 }

 //WARNING !!!
 //operator ini hanya akan mengecek sebuah property index ada atau tidak 
 //jadi walaupun nilai property atau indexnya undefined atau null, maka aakn tetap dianggap ada

 