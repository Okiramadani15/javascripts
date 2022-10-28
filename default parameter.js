//parameter juga bisa kita beri default value, 
  //artinya ketika kita tidak mengirim data ke parameter atau kita mengirim data undefined
  //maka secara otomatis parameter akan diisi oleh default value
  
 function register ( name, gender = "UNKNOWN ") {

  console.log (name);
  console.log (gender); 
 }   

 register ("oki ", "male");
 register( "oki ");
 register( "oki ", undefined);
