let input = document.querySelector("#input")
let addBtn = document.querySelector("#add")
let clearBtn = document.querySelector("#clear")
let list = document.querySelector("ul")
let spanError = document.querySelector("#errormsg")
let count=document.querySelector("#count")

input.addEventListener("keyup", function (e) {
    if (e.target.value.length < 3 || e.target.value.trim() == "") {
        spanError.style.display = "block"
        addBtn.setAttribute("disabled", " ")
    }
    else {
        spanError.style.display = "none"
        addBtn.removeAttribute("disabled", " ")
    }
})

addBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let listItem = document.createElement("li")
    listItem.classList.add("list-group-item")
    listItem.classList.add("d-flex")
    listItem.classList.add("justify-content-between")
    listItem.classList.add("align-item-center")
    let span = document.createElement("span")
    span.classList.add("lead")
    span.textContent = input.value
    let deleteBtn = document.createElement("button")
    deleteBtn.classList.add("btn")
    deleteBtn.classList.add("btn-danger")
    deleteBtn.textContent = "Delete"
    let markBtn = document.createElement("button")
    markBtn.classList.add("btn")
    markBtn.classList.add("btn-info")
    markBtn.textContent = "Done"
    let editBtn = document.createElement("button")
    editBtn.classList.add("btn")
    editBtn.classList.add("btn-primary")
    editBtn.textContent = "Edit"
    markBtn.style.marginLeft = "5px"
    editBtn.style.marginLeft = "5px"
    let btnWrapper = document.createElement("div")
    btnWrapper.prepend(deleteBtn, markBtn, editBtn)
    listItem.append(span, btnWrapper)
    list.prepend(listItem)
    count.innerHTML++
    input.value = " "
  

    deleteBtn.addEventListener("click", function () {
        deleteBtn.parentElement.parentElement.remove()
        count.innerHTML--
    })
    markBtn.addEventListener("click", function () {
        span.style.textDecoration = "line-through"
       
    })
    editBtn.addEventListener("click", function () {


    })
})
clearBtn.addEventListener("click", function () {
    list.innerHTML = ""
  count.innerHTML="0"
})


