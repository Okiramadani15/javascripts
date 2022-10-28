//optional chaining operator ({?} mirip ternary operator tapi penggunaanya berbeda) merupakan operator yang digunakan untuk mengamaankan ketika
//kita ingin mengakses property sebuah object dari data nullish
//jika kita mencoba mengakses property dari sebuah object dari data nullish tanpa menggunakan
//optional chaining operator, maka akan terjadi error

//contoh penggunaan 
let person ={
    //address:{
     //country : "indonesia"
    //}
    }
let country = person?.address?.country;
document.writeln ("sukses");
document.writeln (`<p>${country}</p>`);
 