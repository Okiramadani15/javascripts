//function juga dapat kita tambahkan sebagai property didalam object
//cara membuatnya sama seperti function sebagai value 
//function di object juga kadang disebut sebagai object method

let person= {
    name: "oki",
    sayHi: function( name ){
        alert(`hello ${name}`);
    } 
};
person.sayHi("manis");

//menambhakan method ke object 

let orang  = {
    name : "rama"
};
    orang.sayHi= function (name) {
        alert (`hello ${name}`);

    }

    orang.sayHi("dani");
