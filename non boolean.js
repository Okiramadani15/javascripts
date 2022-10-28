//didalam non boolean kita dapat menggunakan operator logika AND dan OR untuk tipe data Non Boolean 

// operator Or (dimulai dari kanan sebgai data awal)
console.info ("hello" || "");   
console.info ("" || []);   
console.info ("0" || "Nol");   
console.info (0 || "Nol");   
console.info (null || "Null");   
console.info (undefined || "undefined");   
console.info ( 0|| "false");   

//kegunaan or

let person = {
    firstname: "oki ",
    lastname: "dhani"
}

const name = person.firstname || person.lastname;
document.writeln (name);

// operator Or (dimulai dari kiri sebagai data awal)
console.info ("hello" || "");   
console.info ("" || []);   
console.info ("0" || "Nol");   
console.info (0 || "Nol");   
console.info (null || "Null");   
console.info (undefined || "undefined");   
console.info ( 0|| "false");   



