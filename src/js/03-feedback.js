import throttle from "lodash.throttle"

const formEl = document.querySelector('.feedback-form')
const inputEmailEl = document.querySelector('input')
const messageEl = document.querySelector('textarea')

const itemWithCheckedState = checkState()



checkState()
showState()



function showState() {
    if (itemWithCheckedState === undefined) {
        return
    } inputEmailEl.value = itemWithCheckedState.email
    messageEl.value = itemWithCheckedState.message

    
}



function checkState() {
    const itemInLocalStorage = localStorage.getItem("feedback-form-state")
    if (itemInLocalStorage === null) {
        return undefined
    } else {
        return JSON.parse(itemInLocalStorage)
    }
}



const inputHandler = (event) => {

    const emailValue = event.currentTarget.elements.email.value
    const messageValue = event.currentTarget.elements.message.value
    
   
    const objectValues = {
        email: emailValue,
        message : messageValue
    }

    const stringifidValues = JSON.stringify(objectValues)
    localStorage.setItem("feedback-form-state", stringifidValues)
}


const formSubmitHandler = (event) => {
    event.preventDefault()
    console.log(localStorage.getItem("feedback-form-state"))
    event.currentTarget.reset();
    localStorage.clear()

}

formEl.addEventListener('input', inputHandler)
// formEl.addEventListener('input', throttle((event) => inputHandler(event),2000))
formEl.addEventListener('submit', formSubmitHandler)
