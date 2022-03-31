init();
let TodoCount = 0;
let badgeStatus = false;
let Data;

//함수 본문
function readJSON(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}
//함수 사용법
readJSON("./ToDoList.json", function (text) {
  Data = JSON.parse(text);
  for (var i = 0; i < Data.todo.length; i++) {
    TodoCount++;
    updateCount();
    badgeShowing();
    addTask(Data.todo[i].value, i + 1);
  }
});

function init() {
  document.querySelector("form").addEventListener("submit", addToDo);
}

function deleteTodo(num) {
  if (confirm("정말 삭제하시겠습니까??") == true) {
    let remove = document.getElementById("list_" + num);
    let parentNode = remove.parentNode;
    parentNode.removeChild(remove);
    TodoCount--;
    updateCount();
    if (TodoCount == 0) {
      badgeHiding();
    }
  } else {
    return;
  }
}

function addToDo(e) {
  //새로운 할 일 추가하는 경우
  e.preventDefault();
  let toDoValue = document.querySelector("input");
  if (toDoValue.value !== "") addTask(toDoValue.value, ++TodoCount);
  toDoValue.value = ""; //입력창 비워주기
  updateCount();
  badgeShowing();
}

function addTask(value, TodoCount) {
  let today = new Date();
  let ul = document.querySelector("ul");

  let li = document.createElement("li");

  li.innerHTML = `<div id="list_${TodoCount}" class="list cont">
  <label class="li_sus" type="submit" for="ck_${TodoCount}"></label
  >
  <input style="display: none" type="checkbox" id="ck_${TodoCount}" />
  <div class="li_info">
    <h4 class="li_title">
      ${value}
    </h4>
    <div class="li_date">
      <h5>${today.toLocaleString()}</h5>
      <div>
        <a id="delete_${TodoCount}" onclick="deleteTodo(${TodoCount})">delete</a>
        <a>edit</a>
      </div>
    </div>
  </div>
</div>`;

  ul.appendChild(li);
}

function badgeShowing() {
  if (!badgeStatus) {
    badgeStatus = true;
    document.getElementById("badge").style.display = "block";
    setTimeout(function () {
      document.getElementById("badge").style.transform = "scale(1)";
    }, 200);
  }
}

function badgeHiding() {
  if (badgeStatus) {
    badgeStatus = false;
    document.getElementById("badge").style.transform = "scale(0)";
    setTimeout(function () {
      document.getElementById("badge").style.display = " none";
    }, 200);
  }
}

function updateCount() {
  if (TodoCount >= 10) {
    document.getElementById("badge").innerHTML = "9+";
  } else {
    document.getElementById("badge").innerHTML = TodoCount;
  }
}
