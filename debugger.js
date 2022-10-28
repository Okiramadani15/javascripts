//debugger digunakan untuk melakukan proses debugging
//debugging adalah proses untuk mencari masalah (bug) yang biasa terjadi pada program kita
//dengan debugger kita bisa menghentikan kode program di posisi yang kita inginkan (breakpoint)
//lalu melihat semua isi variable yang ada pada saat kode program sedang berhenti

function createFullName(firstName, middleName, lastName) {
  debugger;
  const fullName = `${firstName} ${middleName} ${lastName} ${lastName}`;
  return fullName;
}

const name = createFullName("oki ", "rama", "dani");
console.info(name);
