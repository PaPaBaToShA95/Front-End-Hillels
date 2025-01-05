function numbtospacenumb() {
  const number = document.getElementById("num").value;
  const digits = number.toString().split("");
  let innerText = digits.join(" ");
  document.getElementById("result").innerText = innerText;
}

