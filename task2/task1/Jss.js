let body=document.querySelector("body")
let divContain=document.querySelector("div")
divContain.classlist.add("container")
divContain.classlist.add("px-5")
divContain.style.margin= "0px 100px"
let divRow=document.querySelector("div")

divRow.classlist.add("row")
divContain.append(divRow)
body.append(divContain)

let div1=document.querySelector("div")
div1.classList.add("div1")
div1.style.width="960px"
div1.style.height="360px"
div1.style.width="98%"
div1.style.marginLeft="15px"
div1.style.display="flex"
div1.style.alignItems="center"
div1.style.paddingLeft="400px"

let parag1=document.querySelector("p")
parag1.classList.add("parag1")
parag1.textContent="960 x 360 px"
parag1.style.color="white"
parag1.style.fontSize="18px"
parag1.style.fontFamily="Georgia, 'Times New Roman', Times, serif"
div1.append(parag1)
divRow.append(div1)

let divRow2=document.createElement("div")
divRow2.classList.add("row")
divRow2.classList.add("py-5")

let col1=document.createElement("div")
col1.classList.add("col-4")
let card1 = document.createElement("div")
let divCol1 = document.createElement("div")
divCol1.style.width = "295px"
divCol1.style.height = "186px"
divCol1.style.backgroundColor = "black"
divCol1.style.border = "3px solid white"
divCol1.style.outline = "1px solid black"
divCol1.style.display = "flex"
divCol1.style.alignItems = "center"
let parag2=document.createElement("p")
parag2.textContent="290 X 180 px"
parag2.style.color = "white"
parag2.style.paddingLeft = "115px"
parag2.style.fontFamily = "Georgia, 'Times New Roman', Times, serif"
divCol1.append(parag2)
let heading1 = document.createElement("h6")
heading1.style.padding = "10px 0"
heading1.textContent = "Indonectetus facilis"
heading1.style.fontStyle = "italic"
heading1.classList.add("text-secondary")
let parag3 = document.createElement("p")
parag3.textContent = "Nullamlacus dui ipsum conseque loborttis non eusque morbi penas dapibulum orna."
parag3.classList.add("text-secondary")
let btn1 = document.createElement("button")
btn1.textContent = "Read more >>"
btn1.style.float = "right"
btn1.classList.add("text-warning")
btn1.style.border = "none"
btn1.style.backgroundColor = "white"
card1.append(divCol1, heading1, parag3, btn1)
col1.append(card1)
divRow2.append(col1)
divContain.append(divRow2)

let col2 = document.createElement("div")
col2.classList.add("col-4")
let card2 = document.createElement("div")
let parag3 = document.createElement("div")
parag3.style.width = "290px"
parag3.style.height = "180px"
parag3.style.backgroundColor = "black"
parag3.style.border = "3px solid white"
parag3.style.outline = "1px solid black"
parag3.style.display = "flex"
parag3.style.alignItems = "center"
