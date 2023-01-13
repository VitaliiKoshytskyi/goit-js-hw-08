import throttle from "lodash.throttle"

const formEl = document.querySelector('.feedback-form')
const inputEmailEl = document.querySelector('input')
const messageEl = document.querySelector('textarea')

const itemWithCheckedState = checkState()



checkState()
showState()

let objectValues ={email:'',message:''}

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
    objectValues[event.target.name] = event.target.value

    const stringifidValues = JSON.stringify(objectValues)
    localStorage.setItem("feedback-form-state", stringifidValues)
}


const formSubmitHandler = (event) => {
    event.preventDefault()
    if (event.currentTarget.elements.email.value === '' || event.currentTarget.elements.message.value === '') {
        return alert('Please, fill in all fealds')
    }
    objectValues ={email:'',message:''}
    console.log(localStorage.getItem("feedback-form-state"))
    event.currentTarget.reset();
    localStorage.clear()

}

formEl.addEventListener('input', throttle(inputHandler,2000))
formEl.addEventListener('submit', formSubmitHandler)



