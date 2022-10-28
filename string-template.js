const nama = "oki mahong";
const template = `name : ${nama} `;
console.info(template);

const motor = "vario"
const txt = `kendaraan : ${motor}`;
console.log(txt);

const alamat = "paya-pasir";
const tampil = `alamat : ${alamat}`;
console.log(tampil);
console.log();("</br>");

//penggabungan 
console.log(`penggabungan :${template}  ${txt} ${tampil}`);

//contoh lain 
const id = "lulus";
const nilai = 80;
const lulus = 100;
const gagal = 70;
const jadi = "hasil";
const ko = "no";
console.log(`id : ${jadi} ${nilai==80}`); 

// multiline string 
const multiline = `nama saya oki 
kegiatan menggangur 
cita-cita sukses `; 
document.writeln("<pre>");
document.writeln(multiline);
document.writeln("</pre>");
console.log(multiline);
