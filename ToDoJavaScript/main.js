let toDoInput;
let addButton;
let error_info;
let complete;
let edit;
let delet;
let popUp;
let popUpConfirm;
let popUpClose;
let popUpInput;
let ul;
let li; 
let closeButtonPopUp;
let todoToEdit;

const main = () =>{
    prepareElementDom();
    actionButtonDom();
    error_info.textContent = ""
}



const prepareElementDom = () =>{
    toDoInput = document.querySelector(".todo-input");
    addButton = document.querySelector(".btn-add");
    ul = document.querySelector("ul");
    error_info = document.querySelector(".error-info")
    complete = document.querySelector(".complete")
    edit = document.querySelector(".edit")
    popUp = document.querySelector(".popup")
    closeButtonPopUp = document.querySelector(".cancel")
    popUpInput = document.querySelector(".popup-input")
    popUpConfirm = document.querySelector(".accept")
    li = document.querySelectorAll("li")


}

const actionButtonDom = () => {

    addButton.addEventListener("click", getElement)
    ul.addEventListener("click", checkClick)
    //edit.addEventListener("click", popUpOpen)
    closeButtonPopUp.addEventListener("click", confirmPopUp)
    popUpConfirm.addEventListener("click", confirmPopUp)

}

const getElement = () => {
    if(toDoInput.value != ""){
        li = document.createElement("li");
        li.textContent = toDoInput.value;
        ul.append(li)
        restElementLi();
        toDoInput.value = "";
        error_info.textContent = ""
    }
    else{

        error_info.textContent = "Enter task"

    }
}

const restElementLi = () => {

    const div = document.createElement("div");
    div.classList.add("tools");
    li.append(div)
    const btn1 = document.createElement("button");
    btn1.classList.add("complete");
    btn1.innerHTML = '<i class="fas fa-check"></i>';

    const btn2 = document.createElement("button");
    btn2.classList.add("edit");
    btn2.textContent = "EDIT";

    const btn3 = document.createElement("button");
    btn3.classList.add("delete");
    btn3.innerHTML = '<i class="fas fa-times"></i>';

   
    div.append(btn1, btn2, btn3)

}

const checkClick = (e) => {
    if (e.target.matches(".complete")){
        e.target.closest("li").classList.toggle("completed")
    }
    else if (e.target.matches(".edit")){
        openPopUp(e)
    }

    else if (e.target.matches(".delete")){

        e.target.closest("li").remove();
    }
}

const openPopUp = e => {
    
    popUp.style.display = "flex"
    editToDo = e.target.closest("li")
    console.log(editToDo.firstChild.textContent)
    popUpInput.value = editToDo.firstChild.textContent
    
}

const confirmPopUp = () => {

    popUp.style.display = "none"
    console.log(editToDo.firstChild.textContent)
    editToDo.firstChild.textContent = popUpInput.value
}

document.addEventListener("DOMContentLoaded", main)

