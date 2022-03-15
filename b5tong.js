const a = prompt("nhập 1 dãy số");
const b = a.split(",");
let x = 0;
for (let i = 0; i < b.length; i++){
    x+=Number(b[i]);
}
alert("Tổng dãy số bằng "+x);