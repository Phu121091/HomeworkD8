const a = prompt("Nhập số thứ nhất");
const b = prompt("Nhập số thứ 2");
const mt = prompt("Nhập phép tính");
let result;
if (mt == "+") {
  result = Number(a) + Number(b);
  alert("Kết quả là "+ result);
} else if (mt == "-") {
  result = Number(a) - Number(b);
  alert("Kết quả là "+ result);
} else if (mt == "*") {
  result = Number(a) * Number(b);
  alert("Kết quả là "+ result);
} else if (mt == "/") {
  result = Number(a) / Number(b);
  alert("Kết quả là "+ result);
} else {
  alert("Phép tính ko hợp lệ");
}
