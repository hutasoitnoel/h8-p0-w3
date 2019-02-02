// Mengakses Nilai Dalam Array
function balikString (string){
  var balik = [];
  for (i = string.length - 1 ; i >= 0 ; i--){
    balik += string[i];
  }
  return balik;
}

console.log(balikString("hello world!"))