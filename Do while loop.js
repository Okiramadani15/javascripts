//mirip dengan while loop perbedaanya terletak pada pengecekan kondisinya 
//jika while loop biasa pengnecekean kondisinya pada awal sebelum perulangan 
//maka Do while loop setelah perulangan dilakukan
//oleh karena itu dalam do while loop, minimal pasti dilakukan sekali perulangan 
//walau kondisi tidak bernilai true

let counter = 1;
 do {
    document.writeln (`<p> perulangan ke ${counter}</p>`)
    counter++
 }
 while (counter <= 10)    
 