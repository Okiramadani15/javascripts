//destructuring adalah fitur yang bisa digunakan untuk membongkar value-value array kedalam variable-variable
//fitur ini sangat mempermudah kita ketika ingin mengambil data dari array atau object tanpa harus melakukan pengambilan data satu persatu
const names = ["oki ", "rama", "dani", "railin", "usi"];
const [firstName, middleName, lastName, ...other] = names;
{
  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
  console.info(other);
}

//destructuring juga dapat digunakan pada function parameter
//hal tersebut membuat kita mudah ketika ingin mengambil nested data dalam array atau object dalam function

{
  function displayPerson({ firstName, middleName, lastName }) {
    console.info(firstName);
    console.info(middleName);
    console.info(lastName);
  }

  const person = {
    firstName: "oki ",
    middleName: "rama",
    lastName: "dani",
  };

  displayPerson(person);
}

{
  function sum([first, second]) {
    return first + second;
  }

  console.info(sum([1, 1]));
  console.info(sum([10, 10]));
}

//default Value
// yang menarik dari destructuring adalah, kita bisa menambahkan default value
// jadi misal koita melakukan destructuring terhadap array, ternyata tidak ada datanya, maka kita bisa menambahkan default value
// begitu juga pada object, jika ternyata propetynya tidak ada, maka kita bisa menambhkan default pada value

{
  const names = ["oki"];
  const [firstName, middleName = "rama", lastName = "dani"] = names;

  console.info(firstName);
  console.info(middleName);
  console.info(lastName);
}

//menggunakan nama variable lain
// saat melakukan destructuring di array, kita bisa dengan mudah membuat nama variable sesuka kita
//namun pada saat melakukan desctrucing, kita harus membuat nama variable sama dengan nama property
//kita juga menggunakan nama variable lain saat melakukan disctructuring object jika kita mau

{
  const person = {
    firstName: "railin ",
    middleName: "oki",
    lastName: "usi",
  };

  let { firstName: namaDepan, middleName: namaTengah = "oki ", lastName: NamaBelakang } = person;

  console.info(namaDepan);
  console.info(namaTengah);
  console.info(NamaBelakang);
}
