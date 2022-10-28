//getter dan setter adalah kemampuan membuat function berbeda untuk mengambil data (getter) mengubah data (setter) pada sebuah property di object
// dengan menggunakan getter dan setter, kita bisa melakukan hal apapun dalam function sebelum sebuah property di akses atau diubah, misal menambah validasi dan lain-lain.

//contoh getter dan getter
let person = {
  firstName: "oki",
  LastName: "ramadani",
  get fullName() {
    `${this.firstName} ${this.LastName}`;
  },
  set fullName(value) {
    let array = value.split(" ");
    this.firstName = array[0];
    this.LastName = array[1];
  },
};

person.fullName = "railin rai  ";
console.table(person);

person.fullName = "oki rai ";
console.table(person);

person.fullName = "usi rai";
console.table(person);
