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
  let milliseconds = Math.floor((a % 100).toString());
  let seconds = (((a - milliseconds) * 0.01) % 60).toString();
  let minutes = Math.floor((a / 6000).toString());
  let hours = Math.floor((a / 360000).toString());
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  let returntime = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;

  display.innerHTML = returntime;
}

let timer = 0;
let count2 = document.getElementById("count2");
let reset2 = document.getElementById("reset2");

let t_hours = document.getElementById("t_h");
let t_minutes = document.getElementById("t_m");
let t_seconds = document.getElementById("t_s");
let timer_fn;

let count_toggle2 = false;

count2.addEventListener("click", function () {
  if (!count_toggle2) {
    timer = t_hours.value * 3600 + t_minutes.value * 60 + t_seconds.value * 1;
    timer_fn = setInterval(countDown, 1000);
    count2.innerHTML = "stop";
    count_toggle2 = true;
  } else {
    clearInterval(timer_fn);
    count2.innerHTML = "set";
    count_toggle2 = false;
  }
});

reset2.addEventListener("click", function () {
  t_hours.value = 0;
  t_minutes.value = 0;
  t_seconds.value = 0;
  clearInterval(timer_fn);
  count2.innerHTML = "set";
  count_toggle2 = false;
});

function formatter_timer(a) {
  let hours = Math.floor(a / 3600);
  let minutes = Math.floor(a / 60);
  console.log(a, minutes);
  let seconds = a % 60;
  t_hours.value = hours;
  t_minutes.value = minutes;
  t_seconds.value = seconds;
}

function countDown() {
  if (timer == 1) {
    clearInterval(timer_fn);
    alert("time out");
  }
  timer--;

  formatter_timer(timer);
}
