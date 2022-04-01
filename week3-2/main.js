init();
let badgeStatus = false;
let jsonArray = [];
let TodoCount = 0;
let indexObject = 0;
let UndefinedTodo = 0;
let SucceedList = 0;

const url = new URL(window.location.href);
const urlParams = url.searchParams;

loadTodo();

$(document).ready(function () {
  document.getElementById("todoInput").focus();
  switchMenu();
  if ($("ul").height() <= 0) {
    let ul = document.querySelector("ul");
    let div = document.createElement("div");
    div.innerHTML = `<div class="cont_btn" style="justify-content: center;">Can not find the list. 😥</div>`;
    ul.appendChild(div);
  }
});

function init() {
  document.querySelector("form").addEventListener("submit", addToDo);
}

function loadTodo() {
  if (JSON.parse(localStorage.getItem("jsonArray"))) {
    jsonArray = JSON.parse(localStorage.getItem("jsonArray"));

    for (let i = 0; i < jsonArray.length; i++) {
      indexObject++;
      if (jsonArray) TodoCount = jsonArray.length;
      addTask(jsonArray[i]);
      if (jsonArray[i].isDel) ++UndefinedTodo;
      if (jsonArray[i].isDo) ++SucceedList;
      updateCount();
    }
  }
}

function deleteTodo(num) {
  if (confirm("Are you sure that?????") == true) {
    let getData = JSON.parse(localStorage.getItem("jsonArray"));
    getData[num].isDel = true;
    localStorage.setItem("jsonArray", JSON.stringify(getData));

    updateCount();
  } else {
    return;
  }
  window.location.reload();
}

function addToDo(e) {
  //새로운 할 일 추가하는 경우
  let toDoValue = document.getElementById("todoInput");
  if (toDoValue.value !== "") {
    let jsonObj = new Object();
    var date = new Date();

    jsonObj.idx = indexObject++;
    jsonObj.value = toDoValue.value;
    jsonObj.date = date.toLocaleString();
    jsonObj.isDo = false;
    jsonObj.isDel = false;

    jsonObj = JSON.stringify(jsonObj);

    //String 형태로 파싱한 객체를 다시 json으로 변환
    jsonArray.push(JSON.parse(jsonObj));

    localStorage.setItem("jsonArray", JSON.stringify(jsonArray));

    toDoValue.value = ""; //입력창 비워주기
    updateCount();
    // loadTodo();
  }
}

function addTask(Todo) {
  let Doit;
  if (Todo.isDo) Doit = "checked";
  else Doit = "";
  if (!Todo.isDel) {
    let ul = document.querySelector("ul");
    let li = document.createElement("li");
    li.innerHTML = `<div id="list_${Todo.idx}" class="list cont ${Doit}" style="display: none">
  <label class="li_sus ${Doit}" type="submit" for="ck_${Todo.idx}"></label
  >
  <input style="display: none" type="checkbox" id="ck_${Todo.idx}" onChange={Doit(${Todo.idx})} ${Doit} />
  <div class="li_info">
    <h4 class="li_title">
      ${Todo.value}
    </h4>
    <div class="li_date">
      <h5>${Todo.date}</h5>
        <a id="delete_${Todo.idx}" onclick="deleteTodo(${Todo.idx})">delete</a>
    </div>
  </div>
</div>`;
    ul.appendChild(li);
  }
}

function badgeShowing() {
  if (TodoCount !== 0) {
    if (!badgeStatus) {
      badgeStatus = true;
      document.getElementById("badge").style.display = "block";
      setTimeout(function () {
        document.getElementById("badge").style.transform = "scale(1)";
      }, 200);
    }
  }
}

function badgeHiding() {
  if (TodoCount == 0) {
    if (badgeStatus) {
      badgeStatus = false;
      document.getElementById("badge").style.transform = "scale(0)";
      setTimeout(function () {
        document.getElementById("badge").style.display = " none";
      }, 200);
    }
  }
}

function updateCount() {
  TodoCount = jsonArray.length - UndefinedTodo - SucceedList;
  if (TodoCount >= 10) {
    document.getElementById("badge").innerHTML = "9+";
  } else {
    document.getElementById("badge").innerHTML = TodoCount;
  }
  if (TodoCount != 0) {
    badgeShowing();
  } else {
    badgeHiding();
  }
}

function Doit(num) {
  let getItem = document.getElementById("list_" + num);

  if (getItem.querySelector("input[type=checkbox]").checked) {
    getItem.querySelector("label").classList.add("checked");
    jsonArray[num].isDo = true;
    localStorage.setItem("jsonArray", JSON.stringify(jsonArray));
    getItem.classList.add("succeed");
  } else {
    getItem.querySelector("label").classList.remove("checked");
    jsonArray[num].isDo = false;
    localStorage.setItem("jsonArray", JSON.stringify(jsonArray));
    getItem.classList.remove("succeed");
  }
  window.location.reload();
}

function clearAll() {
  if (confirm("Are you sure that?????") == true) {
    localStorage.removeItem("jsonArray");
    window.location.reload();
  }
}

function switchMenu() {
  if (urlParams.get("view") == "succeed") {
    console.log("Succeed");
    document.getElementById("succ_btn").classList.add("active");

    $(".list").css("display", "none");
    $(".list.checked").css("display", "flex");
  } else if (urlParams.get("view") == "not") {
    document.getElementById("not_btn").classList.add("active");

    $(".list").css("display", "flex");
    $(".list.checked").css("display", "none");
  } else {
    document.getElementById("all_btn").classList.add("active");
    $(".list").css("display", "flex");
  }
}
