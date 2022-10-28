const masuk = confirm (" are you sure?");
    if (masuk) { 
        const name = prompt ("what is your name?");
        alert (`hello ${name}`);
   
    }else{
        alert ("bye");
    }
//berikut cara penggunaan kombinasi confrim, prompt dan alert

//contoh berikutnya

const code = confirm ("welcome mate");
 if (code) {
    const code = prompt ("are you sure?");
    alert (`hi ${code}`);
 }else{
    alert( "thanks!!!"); 
 }


