let input= document.getElementById("input");
let add = document.getElementById("submit");
let reset = document.getElementById("reset");
let output = document.getElementById("listItem");
// let delete = document.querySelector(".button");

add.addEventListener("click", getInput);
// reset.addEventListener("click", clearList);
output.addEventListener("click", removeItem);

function getInput(e){
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    li.className="todoListItem";
    let del = document.createElement("button");
    del.className="delete";
    del.innerText="x";
    li.appendChild(del);
    output.appendChild(li);
    input.value = "";
    e.preventDefault();
}

function removeItem(e){
    if(e.target.className ==="delete"){
        e.target.parentElement.remove();
    };
    e.preventDefault();
}


