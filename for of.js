//jika for In digunakan untuk melakukan iterasi property atau index, berbeda dengan For of
//for Of digunakan untuk melakukan iterasi terhadap isi value dari iterable object, seperti Array, string 
//dan lain-lain 

//For Of tidak bisa digunakan untuk melakukan iterasi data di Object, karena Object bukanlah iterable
 let names = ["oki", "rama", "dani"];

 for (let name of names) {
   document.writeln(`<p>${name}</p>`);
 }

//conto kedua
let fullname = "oki rama dani "
for ( let character of fullname) {
   document.writeln(`<p> ${character}</p>`)
}