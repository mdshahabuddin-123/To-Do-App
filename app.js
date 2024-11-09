
let inputBox = document.getElementById("input-box");
let listContainer = document.getElementById("list-container");
let button = document.getElementById("one")


button.addEventListener("click",() => {
   if(inputBox.value === ''){   
    alert("Write something here plz")
   }else{
    let li = document.createElement("li")
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    li.appendChild(span);

   }
   inputBox.value = " ";
   saveData();
})

listContainer.addEventListener("click",function(event){

    if (event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
        saveData();
    }

    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
        saveData();
    }
});

function saveData(){
    localStorage.setItem("data",listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask();