const savings=205.02
const checking=571.90
const cash=471
const total_balance=savings+checking+cash
const balance= checking + cash

const groceries=document.querySelector("#groceries")
const ledger=document.querySelector("#ledger")
const debts=document.querySelector("#debts")
const calculate=document.querySelector("#calculate")

function hideAll(){
    options=["ledger","debts","groceries","calculate"]
    options.forEach((option)=>{
        document.querySelector(`#${option}`).classList.add("hide")
    })
}

function hideAllExcept(item){
    hideAll()
    document.querySelector(`#${item}`).classList.toggle("hide")
}

function showButton(button,container){
    button.addEventListener("click",()=>{
        hideAllExcept(container)
    })
}

showButton(document.querySelector("#viewledger"), "ledger")
showButton(document.querySelector("#viewdebts"),"debts")
showButton(document.querySelector("#groceriesbtn"), "groceries")
showButton(document.querySelector("#calculatebtn"),"calculate")

hideAll()