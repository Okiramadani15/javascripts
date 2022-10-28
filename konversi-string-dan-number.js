const value1 = 5
const value2 = 5
const sum = value1 + value2
console.log(sum);
document.writeln(`<p>${sum}</p>`);
//jika penjumlahan number to number maka akan menghasilkan hasil jumlah semisal 5 + 5 = 10

const value3 = "10"
const value4 = 10
const sum1 = value3 + value4
console.log(sum1);
document.write(`<p>${sum1}</p>`);
//jika penjumlahan string to number  maka tidak akan menghasilkan hasil jumlah yang sama  semisal 10 + 10 = 1010

//cara koversi 
//menggunakan parseInt jika ingin mengubah string ke number 
//menggunakan parsefloat jika ingin mengubah kepecahan 
//menggunakan number jika mengubah string ke number (bilangan/pecahan)
//menggunakan Number.toString() mengubah number ke string 

//koversi menngunakan number
const value5 =  Number ("20")
const value6 = (30) 
const sum2 = value5 + value6 
console.log(sum2);
document.writeln(`<p>${sum2}</p>`);

//koversi mengunakan parseInt
const value7 =  parseInt ("20")
const value8 = (30) 
const sum3 = value7 + value8 
console.log(sum3);
document.writeln(`<p>${sum3}</p>`);

console.log("</br>");
document.writeln("</br>");

//koversi mengunakan parseFloat
const value9=  parseFloat ("20.9")
const value10 = (30) 
const sum4 = value9 + value10
console.log(sum4);     
document.writeln(`<p>${sum4}</p>`);

console.log("</br>");
document.writeln("</br>");


document.writeln(`<p>${parseInt("1.1")}</p>`); //semua bilangan akan dibulatkan tidak perduli pecahan
document.writeln(`<p>${parseFloat("1.1")}</p>`);//semua bilangan akan menjadi pecahan jika  bilangan pecaha  n 
document.writeln(`<p>${Number("1.1")}</p>`);//semua bilangan tergantung penyebut

console.log(`<p>${parseInt("1.1")}</p>`);
console.log(`<p>${parseFloat("1.1")}</p>`);
console.log(`<p>${Number("1.1")}</p>`);


console.log("</br>");
document.writeln("</br>");

//koversi mengunakan Number.toString
const a = 10   
const b =  20
const total = a.toString() + b.toString() 
console.log(total);     
document.writeln(`<p>${total}</p>`);//hasil 1020

//NaN yaitu Not a Number 
/*jadi ketika program meminta kita memasukan number tapi kita malah memasukan text
 maka akan teridentifikasi sebagai NaN*/

//contoh 
document.writeln(`<p>${parseInt("halo")}</p>`);
document.writeln(`<p>${parseFloat("oki1.1")}</p>`);
//jika string didepan number  di dalam parseInt dan parseFloat maka akan muncul NaN (kesalahan) 
//jika number didepan string  maka NaN tidak akan di tolerir karena membaca anumber terlebih dahulu  

document.writeln(`<p>${Number("1.1oki")}</p>`);
//number tidak dapat mentolerir kesalahan apapun jika nilai Number dan string digabung maka akan muncul NaN


console.log(`<p>${parseInt("salah")}</p>`);
console.log(`<p>${parseFloat("oki1.1")}</p>`);
console.log(`<p>${Number("1.1oki")}</p>`);

//contoh 
const pertama = Number("oki ");
const kedua = Number(10);
const hasilnya = pertama + 10; 
console.log(`<p>${hasilnya}</p>`);
document.writeln(`<p>${hasilnya}</p>`); 

//contoh IsNaN 
const pertama1 = Number("oki ");
const kedua1 = Number(10);
const hasilnya1 = pertama1 + 10; 
console.log(`<p>${hasilnya1}</p>`);
document.writeln(`<p>${isNaN(hasilnya1)}</p>`); //true

const pertama2 = Number("oki ");
const kedua2 = Number(10);
const hasilnya2 = pertama2 + 10; 
console.log(`<p>${isNaN(kedua2)}</p>`);
document.writeln(`<p>${isNaN(kedua2)}</p>`); //false

const v1 = "dgd"
const v2 =  10
const hasilnya3 = v1 + v2;
console.log (`<p>${isNaN(v1)}</p>`);
document.writeln(`<p>${isNaN(hasilnya3)}</p>`);

