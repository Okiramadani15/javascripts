/*tipe data object sama seperti array hanya bedanya tipe data object mampu mengkoversi string
jadi kita dapat menguabah index array yang wajib number atau angka menjadi object atau (atribut) string*/  


const person = { "nama lengkap": "oki ramadani", alamat : "paya pasir", umur : 26  };
console.info (`Name  = ${person["nama lengkap"]}` );
console.info (`Address = ${person.alamat}`);
console.info (`person${person.umur}`);


console.table(person);
console.log(person,length)  
// mengubah data object/ atribute
person["umur"] = 23;
console.table(person);

//menghapus object/atribut 
delete person["nama"]
console.table(person)

//munculkan lagi 
person["nama"] = "oki ramadani ";   
