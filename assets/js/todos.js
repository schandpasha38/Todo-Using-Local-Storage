// console.log("Test")
// console.log(jQuery)

//[[[[[[[[[[[[[[[[[[[[[[[[[[[[Local Storage App]]]]]]]]]]]]]]]]]]]]]]]]]]]]

var removecon = document.getElementsByClassName("removecon")[0];

document.getElementById("inpSubmit").addEventListener("click", inputValuesGrab);
document.getElementById("clearAll").addEventListener("click", clearStorage);
document.getElementById("isOutput").addEventListener("click", removeElement);

function inputValuesGrab(e) {
  e.preventDefault();
  var key = document.getElementById("inpKey").value;
  var value = document.getElementById("inpvalue").value;
  if (key && value) {
    document.getElementById("errorMsg").innerHTML = "";
    removecon.textContent = "";
    localStorage.setItem(key, value);
    todoslistitems();
    inpKey.value = "";
    inpvalue.value = "";
    successMsg.innerHTML = `Todo with Title ${key} is Added to list`
  } else {
    errorMsg.innerHTML = "Please Enter Title And Discription to proceed To Add :)";
    removecon.textContent = "";
    successMsg.innerHTML = "";
  }
};

function todoslistitems() {
  isOutput.innerHTML = "";
  for (var i = 0; i < localStorage.length; i++) {
    var key = localStorage.key(i);
    var value = localStorage.getItem(key);
    isOutput.innerHTML += `<div class="todoBox"><p class="todoItem"><span class="todolist"><span class="key">${key}</span><span>: ${value}</span></span><img class="removebtn" src="img/icons/garbage4.png" alt=""></p></div>`;
  }
};
todoslistitems();

function clearStorage() {
  localStorage.clear();
  todoslistitems();
};

function removeElement(e) {
  if (e.target.className == "removebtn") {
    key = e.target.parentElement.firstChild.firstChild.textContent;
    e.target.parentElement.parentElement.remove();
    localStorage.removeItem(key);
    todoslistitems();
    successMsg.innerHTML = ""
    errorMsg.innerHTML = "";
    removecon.textContent = "Task with Title " + key + " Completed and Removed ";
  }
};