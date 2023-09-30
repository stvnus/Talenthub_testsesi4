let bintang = 5;
let pola  = "";

for (let i = 0; i < bintang; i++) {
  for (let j = 0; j < bintang - i - 1; j++) {
    pola += " ";
  }
  for (let k = 0; k < 2 * i + 1; k++) {
    pola += "*";
  }
  pola += "\n";
}
console.log(pola);
