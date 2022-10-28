//contoh operasi operator logika
const nilaiujian = 80;
const nilaiabsensi = 80;

const nilailulusujian = nilaiabsensi  > 75;
const nilailulusabsensi = nilaiujian < 75;

const lulus = nilailulusujian && nilailulusabsensi;
document.writeln(lulus);


document.writeln("</br>");

const nilaikuliah = 3.00;
const absensi = 1;

const luluskuliah = absensi < 4 ;
const  skripsi = nilaikuliah > 2.75

const tamat = luluskuliah && skripsi; 
document.writeln(tamat);
/* && setiap bilangan true ketemu false akan menghasilkan hasil false (salah ) kecuali,
bilangan true ketemu dengan true maka akan mengasilkan nilai true ( benar ) */


document.writeln("</br>");

const kerja =  50
const kehadiran = 100

const target = kerja  <50
const gaji  =  kehadiran <50

const cair = target || gaji; 
document.writeln(cair);

document.writeln("</br>");

const menang = 100;
const kalah = 0; 

const match = kalah >0;
const poin = menang ==100; 
const hasil = match || poin; 
document.writeln(hasil);
/* && setiap bilangan false ketemu true akan menghasilkan hasil true(benar )  kecuali,
bilangan false ketemu dengan false  maka akan mengasilkan nilai false ( salah  ) */
 





