const money_savings=205.02
const money_checking=571.90
const money_cash=471

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