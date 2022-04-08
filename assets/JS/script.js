/*
Stampare in console i numeri da 1 a 100.
 */

const container = document.querySelector(".container");

const limit = 100;

for(let i=1; i<=limit; i++){
  console.log(i);
  const boxEl = document.createElement("div");
  // Gli scrivo la classe
  boxEl.className = "box";
  boxEl.append(i);
  container.append(boxEl);
}