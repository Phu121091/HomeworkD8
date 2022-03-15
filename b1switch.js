const a = prompt("Nhập số thứ nhất");
const b = prompt("Nhập số thứ 2");
const mt = prompt("Nhập phép tính");
let result;
switch (mt) {
  case "+":
    result = Number(a) + Number(b);
    alert("Kết quả là " + result);
    break;
  case "-":
    result = Number(a) - Number(b);
    alert("Kết quả là " + result);
    break;
  case "*":
    result = Number(a) * Number(b);
    alert("Kết quả là " + result);
    break;
  case "/":
    result = Number(a) / Number(b);
    alert("Kết quả là " + result);
    break;
  default:
    alert("Phép tính ko hợp lệ");
}
