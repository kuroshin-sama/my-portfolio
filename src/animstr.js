const allwords = "html css javascript react";
const words = allwords.split(" ");
const limit = words.length;
let idx = 0,
  flag = false,
  txt = "",
  speed;
function type() {
  const element = document.getElementById("animtxt");
  const elementmh = document.getElementById("animtxtmh");
  if (!element) {
    setTimeout(type, 100);
  }

  const word = words[idx];

  if (flag) {
    txt = txt.slice(0, -1);
    speed = 80;
  } else {
    txt = word.substring(0, txt.length + 1);
    speed = 120;
  }
  element.innerHTML = `Ali<br />${txt}`;
  elementmh.innerHTML = `Ali<br />${txt}`;

  if (!flag && txt === word) {
    flag = true;
    speed = 1500;
  }

  if (flag && txt === "") {
    idx = (idx + 1) % limit;
    flag = false;
    speed = 500;
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", type);
