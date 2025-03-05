const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value != ""){
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span)
  }
  saveData();
  inputBox.value = "";
}

function deleteAll(){
  if(confirm("Are you sure you want to delete all tasks?")){
    listContainer.innerHTML = "";
    saveData();
    showTask();
  }
}

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}

inputBox.addEventListener("keypress", function(event){
  if(event.key == "Enter"){
    addTask();
  }
})

listContainer.addEventListener("click", function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
  }
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
  }
  saveData();
});

showTask();