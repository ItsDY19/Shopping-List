var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelector("li");

function inputLength() {
    return input.value.length;
}

function createListElement() {
    var li = document.createElement("li");
    var div = document.createElement("div");
    var del = document.createElement("button");
    div.classList.add("wrapper");
    ul.appendChild(div);
    div.append(li, del);
    li.appendChild(document.createTextNode(input.value));
    input.value = "";
    del.classList.add("del");
    var t = document.createTextNode("Delete");
    del.appendChild(t);

}


function addListAfterClick() {
    if(inputLength() > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.keyCode == 13) {
        createListElement();
    }
}


function toggleDone(task) {

    if (task.target.tagName == "LI") {
        task.target.classList.toggle("done");
    }

}

function deleteListItem(element) {
    if(element.target.className == "del"){
        element.target.parentElement.remove();
    }
}


button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeypress);



ul.addEventListener("click", function(element) {
    toggleDone(element);
    deleteListItem(element);
});