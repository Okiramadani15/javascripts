//label merupakan penanda yang bisa digunakan dengan kata kunci break dan continue
//secara default saat kita melakukan break atau continue, dia akan melakukan terhadap perulangan
//dimana kode break dan continue itu digunakan
//dengan menggunakan label, kita bisa melalukan break dan continue terhadap perulangan yang kita inginkan 
//asalkan pada perulanganya kita gunakan label
//untuk membuat label, kita bisa gunakan nama label itu diinkuti dengan (:) titik dua

loopi:
   for (let i=0; i<10; i++) {
   
loopj:
   for (let j=0; j<100; j++){
      if (j >10 ){
         continue;
      }
      console.info(`${i} - ${j}`);
   }
}