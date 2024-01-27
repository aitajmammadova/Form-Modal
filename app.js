const add=document.getElementById("add")
const modal=document.querySelector(".main-modal")
const form=document.querySelector(".modal")
const nameInput=document.querySelector("#name")
const surnameInput=document.getElementById("surname")
const ageInput=document.getElementById("age")
 
const tbody=document.querySelector(".tbody")
add.addEventListener("click",()=>{
    modal.classList.add("active")
})
modal.addEventListener("click",()=>{
    modal.classList.remove("active")
})
form.addEventListener("click",(e)=>{
    e.stopPropagation()
})
modal.addEventListener("submit",(e) =>{
    e.preventDefault()
    const tr=document.createElement("tr")
    const tdName=document.createElement("td")
    tdName.textContent=nameInput.value
    const tdSurname = document.createElement("td")
    tdSurname.textContent=surnameInput.value
    const tdAge = document.createElement("td")
    tdAge.textContent=ageInput.value
    tr.append(tdName,tdSurname,tdAge)
    tbody.append(tr)
    nameInput.value=""
    ageInput.value=""
    surnameInput.value=""
    modal.classList.remove("active")
    
})
