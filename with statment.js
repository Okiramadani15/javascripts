// with statment merupakan fitur yang digunakan untuk menurunkan sebuah scope data
//dengan menggunakan with statment, kita bisa mengakses property dalam sebuh data 
//tanpa harus menyebut datanya


//contoh tanpa with statment 
let person = {
  firstname: "oki",
  middlename: "rama",
  lastname: "dani" 
}

console.log ( person.firstname);
console.log ( person.middlename);
console.log ( person.lastname);

//contoh dengan with statment 

let daftar = {
  satu : "si",
  dua  : "ma",
  tiga : "hong"
}

with ( daftar ) {
  console.log(satu)
  console.log(dua)
  console.log(tiga)

}
