let initTime = 0;
let count_toggle = false;

let count = document.getElementById("count");
let reset = document.getElementById("reset");
let display = document.getElementById("display");
let interval;

count.addEventListener("click", function () {
  if (!count_toggle) {
    interval = setInterval(countUp, 10);
    count.innerHTML = "stop";
    count_toggle = true;
  } else {
    count.innerHTML = "count";
    clearInterval(interval);
    count_toggle = false;
  }
});

reset.addEventListener("click", function () {
  initTime = 0;
  display.innerHTML = "0:00:00:00";
  count.innerHTML = "count";
  clearInterval(interval);
  count_toggle = false;
});

function countUp() {
  initTime++;
  formatter(initTime);
}

function formatter(a) {
  let milliseconds = (a % 100).toString();
  let seconds = (((a - milliseconds) * 0.01) % 60).toString();
  let minutes = (a / 6000).toFixed(0).toString();
  let hours = (a / 360000).toFixed(0).toString();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let returntime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

  display.innerHTML = returntime;
}

let count2 = document.getElementById("count2");
let reset2 = document.getElementById("reset2");

let t_hours = document.getElementById("t_h");
let t_minutes = document.getElementById("t_m");
let t_seconds = document.getElementById("t_s");
let timer;

let count_toggle2 = false;

count2.addEventListener("click", function () {
  if (!count_toggle2) {
    count2.innerHTML = "stop";
    count_toggle2 = true;
  } else {
    count2.innerHTML = "set";
    count_toggle2 = false;
  }
});

reset2.addEventListener("click", function () {
  t_hours.value = 00;
  t_minutes.value = 00;
  t_seconds.value = 00;
});
