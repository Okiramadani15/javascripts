//adalah kombinasi function bundle referensi krdata sekitarnya
//dengan closure kita bisa membuat sebuah function di local scope
//dan referensi ke data di sekitar local scope tersebut, keluar scopenya

function createAdder(value) {
  let owner = "oki ";

  function add(param) {
    console.info(owner);
    return value + param;
  }

  return add;
}

let addTwo = createAdder(2);

console.info(addTwo(10));
console.info(addTwo(20));

let addTen = createAdder(10);

console.info(addTen(10));
console.info(addTen(20));
