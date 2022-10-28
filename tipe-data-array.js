let arraykosong = [];

let arraycontoh =["boleh string ", 10 , true];

// setiap array akan di simpan dalam posisi berurutan dan dimulai dari urutan pertama yaitu angka (0)
//setiap menambahkan data maka array maka akan disimopan di urutan akhir 
//urutan di array namanya index


//contoh 

let array1 = []

array1.push ("oki ramadani", 15 , 1996, true);
array1.push ("lari trail", 11, false);
console.table(array1); 
array1 [0] = "mahong"; 
console.table(array1);
console.info(array1,length);

//mengubah data array 
array1[5] = 21;
console.table(array1);

array1[0] = "programmer";
console.table(array1);
 
//menghapus index
delete array1[5]
console.table(array1);

//munculkan lagi 
array1[5] = "ada lagi" ,1;
console.table(array1);

let alti =[ ]

 alti.push ("altisumut, tebing_tinggi, medan, karo, langkat  ");
 alti.push  ("jumlah", 3, );
 console.table(alti);
 alti[4] = "  jumlah ";
console.info(alti,length);
//operator array 
/* array.push = menambah array 
    array.length = mendapatkan panjang array 
    array[index] = mendaptkan data posisi index
    array [index] = value mengubah data posisi index
    delete array[index] = menghapus data posisi index, namun index tidak bergeser*/

