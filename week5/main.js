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
    count.classList.add("stop");
    count_toggle = true;
  } else {
    count.innerHTML = "count";
    count.classList.remove("stop");
    clearInterval(interval);
    count_toggle = false;
  }
});

reset.addEventListener("click", function () {
  initTime = 0;
  display.innerHTML = "0:00:00:00";
  count.innerHTML = "count";
  count.classList.remove("stop");
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
  if (
    t_hours.value < 0 ||
    t_minutes.value < 0 ||
    t_seconds.value < 0 ||
    t_hours.value + t_minutes.value + t_seconds.value == 0
  ) {
    alert("Please check the value");
  } else {
    if (!count_toggle2) {
      timer_fn = setInterval(countDown, 1000);
      count2.innerHTML = "stop";
      count2.classList.add("stop");
      count_toggle2 = true;
      toggle_disable(true);
    } else {
      clearInterval(timer_fn);
      count2.innerHTML = "set";
      count2.classList.remove("stop");
      count_toggle2 = false;
      toggle_disable(false);
    }
  }
});

reset2.addEventListener("click", function () {
  t_hours.value = 0;
  t_minutes.value = 0;
  t_seconds.value = 0;

  clearInterval(timer_fn);
  count2.innerHTML = "set";
  count2.classList.remove("stop");

  count_toggle2 = false;
  toggle_disable(false);
});

function formatter_timer(a) {
  t_hours.value = Math.floor(a / 3600);
  t_minutes.value = Math.floor((a - t_hours.value * 3600) / 60);
  t_seconds.value = (a - t_hours.value * 3600 - t_minutes.value * 60) % 60;
}

function countDown() {
  timer = t_hours.value * 3600 + t_minutes.value * 60 + t_seconds.value * 1;
  console.log("timer is ", timer, " seconds");
  if (timer <= 1) {
    clearInterval(timer_fn);
    timer = 0;
    alert("time out");
    toggle_disable(false);
    count2.innerHTML = "set";
    count2.classList.remove("stop");
  } else {
    timer--;
  }

  formatter_timer(timer);
}

function toggle_disable(b) {
  t_hours.disabled = b;
  t_minutes.disabled = b;
  t_seconds.disabled = b;
}

let t_hours_up = document.getElementById("t_h_u");
let t_hours_down = document.getElementById("t_h_d");
let t_minutes_up = document.getElementById("t_m_u");
let t_minutes_down = document.getElementById("t_m_d");
let t_seconds_up = document.getElementById("t_s_u");
let t_seconds_down = document.getElementById("t_s_d");

t_hours_up.addEventListener("click", function () {
  t_hours.value++;
});

t_hours_down.addEventListener("click", function () {
  if (t_hours.value > 0) {
    t_hours.value--;
  }
});

t_minutes_up.addEventListener("click", function () {
  t_minutes.value++;
});

t_minutes_down.addEventListener("click", function () {
  if (t_minutes.value > 0) {
    t_minutes.value--;
  }
});

t_seconds_up.addEventListener("click", function () {
  t_seconds.value++;
});

t_seconds_down.addEventListener("click", function () {
  if (t_seconds.value > 0) {
    t_seconds.value--;
  }
});
