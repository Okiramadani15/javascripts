//contoh operasi augmented assingment
let result = 1 + 2;
document.writeln ( "<p> 1 + 2 = " + result + " </p>" )
let originalresult = result; // hasil result jadi  = 3
// dikarenakan nilai result adalah 1+2 = 3

result +=  1;
document.writeln ( "<p>" + originalresult + "+1 =" + result + " </p>" )
originalresult = result; // hasil  result jadi  = 4
// dikarenakan nilai result adalah result yang tadi jumlahnya 3 kini ditambahkan 1 maka = 4

result *= 4 ;
document.writeln ( "<p>" + originalresult + " * 4 =" + result + " </p>" )
originalresult = result; // hasil  result jadi  =  16
// dikarenakan nilai result adalah result yang tadi jumlahnya 4 kini dikali 4 maka = 16

result /= 2 ;
document.writeln ( "<p>" + originalresult + " / 2 =" + result + " </p>" )
originalresult = result; // hasil  result jadi  =  8
// dikarenakan nilai result adalah result yang tadi jumlahnya 16 kini dibagi 2 maka = 8

result %= 2 ;
document.writeln ( "<p>" + originalresult + " % 2 =" + result + " </p>" )
originalresult = result; // hasil  result jadi  =  0
// dikarenakan nilai result adalah result yang tadi jumlahnya 8 kini dimodulus 2 maka = 0

result -= 2 ;
document.writeln ( "<p>" + originalresult + " - 2 =" + result + " </p>" )
originalresult = result; // hasil  result jadi  =  -2
// dikarenakan nilai result adalah result yang tadi jumlahnya 0 kini dikurang 2 maka = -2

result += 4 ;
document.writeln(`<p> -2 + 4 = ${result}</p>`)
originalresult = result;