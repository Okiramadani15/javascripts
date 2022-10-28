//kata kunci this adalah refrensi ke objcet 
//tiap lokasi kata kunci this, bisa berbeda-beda refrensi pemiliknya
//dalam object moethod, this merupakan refrensi ke object pemilik functionya 
//di global scope, this merupakan refrensi ke global object ( di browser biasanya window)
//dalam function, this merupakan refrensi global object ( di browser biasanya window 
//di function dengan strict mode this adalah undefined
//dalam event, this merupakan refrensi ke element yang menerima event 

console.info(this); 
document.writeln(this);

//contoh 
function sample (){
    console.info(this);
}

sample();