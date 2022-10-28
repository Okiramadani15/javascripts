//recursive function adalah kemampuan function memanggil dirinya sendiri 
//banyak problem yang, lebih mudah diselesaikan menggunakan recursive function, contoh kasus factorial 

// kode factorial 
function factorial (value) {
  let  Result= 1;
  for ( i=1; i <= value; i++) {

    Result *= i;

  }
  return Result;
}

document.writeln (factorial(5));
document.writeln (1 * 2 * 3 * 4 * 5);

// penyelesaian factorial mengguinakan recursive
 function factorialRecursive (value){
  if (value === 1){
    return 1; 
  }else{
    return value * factorialRecursive (value -1); 
  }
}

document.writeln (factorialRecursive(5));

