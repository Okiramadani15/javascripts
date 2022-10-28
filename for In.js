//FOR IN merupakan perulangan yang digunakan untuk mengintegrasi seluruh data property 
//di object atau di index array 
//walaupun FOR IN bisa digunakan untuk Array, namun tidak direkomendasikan untuk Array
//karena biasanya kita jarang sekali butuh data index untuk Array, kita bisa menggunakan For of

let person = {
   firstname : "oki",
   middlename : "rama",
   lastname : "dani"
}; 

for (let property in person) {
   document.writeln (`<p> property ${property} : ${person [property]} </p>`)
}

//penggunaan fungsi pada array 
let names =[ 'oki', 'rama', 'dani'] 
for (let index in names) {
   document.writeln (`<p> index ${index} : ${names [index]} </p>`)
}
