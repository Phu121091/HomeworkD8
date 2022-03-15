const a = prompt("nhập 1 dãy số");
const b = a.split(",");
let x = b[0];
for (let i = 0; i < b.length; i++) {
  if (x > Number(b[i])) {
    x = b[i];
  }
}
alert("số bé nhất là " + x);
