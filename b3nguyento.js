const a = prompt("Nhập 1 số bất kì");
let kq = 0;
let b = Number(a) - 1;
if (a == 2) {
  kq = 0;
} else if (Number(a) > 2 && (Number(a) % 2 == 0 || Number(a) % 2 == 1)) {
  for (let i = 2; i < b; i++) {
    if (Number(a) % i == 0) {
      kq++;
      break;
    } else {
      continue;
    }
  }
} else {
  kq = 1;
}

if (kq == 0) {
  alert(a + " là số nguyên tố");
} else {
  alert(a + " ko phải là số nguyên tố");
}
