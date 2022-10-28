// ternary operator adalah operator sederhana dari if statment 
//ternary operator terdiri dari kondisi yang di evaluasi, jika menghasilkan true maka
//nilai pertama diambil jika false, maka nilai kedua diambil 


//contoh ternary operator
const hasil = 80;
const quotes = hasil >= 75? "conguratulation" : "sorry try again! ";
document.writeln (`<p> ${quotes}</p>`)



//contoh 2
const angka = 70;
const kata = angka >= 75 ? "mantap" : "hemmm";
document.writeln (`<p>${kata}</p>`);




// tanpa ternary operator
 const nilai = 75;
 let ucapan;

  if (nilai >= 75 ) {
      ucapan = "selamat kamu terbaik ";
  } else {
    ucapan = "silahkan coba lagi";
  }

  document.writeln (`<p>${ucapan}</p>`);
 //WARNING !!!
 //operator ini hanya akan mengecek sebuah property index ada atau tidak 
 //jadi walaupun nilai property atau indexnya undefined atau null, maka aakn tetap dianggap ada

 