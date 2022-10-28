//nullish value adalah null undefined
//nullish coalescing operator (??) adalah operator mirip dengan ternary operator, yang membedakan 
//adalah kondisi, jika bernilai null atau undefined, baru value defaultnya diambil

//mirip dengan ternary operator yang membedakan menggunakan tanda tanya dua kali (??)

//contoh nullish coalescing operator 
let parameter;
let data = parameter
    if (data === undefined || data == null) {
        data = "nilai default ";    
    }
    document.writeln(`<p>${data}</p>`);   
    data = parameter ?? "nilai default ";
    document.writeln(`<p>${data}</p>`);