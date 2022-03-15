const a = prompt("Nhập 1 số bất kì");
if (Number(a) % 2 == 0) {
  alert(a+" là số chẵn");
} else if (Number(a) % 2 == 1) {
  alert(a+" là số lẻ");
} else {
  alert(a+" ko phải số tự nhiên");
}
