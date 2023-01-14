import throttle from "lodash.throttle"

const formEl = document.querySelector('.feedback-form')


const itemWithCheckedState = checkState()



checkState()


let objectValues ={email:'',message:''}


    if (itemWithCheckedState ) {
        
    formEl.elements.email.value = itemWithCheckedState.email 
    formEl.elements.message.value = itemWithCheckedState.message 
    objectValues = JSON.parse(localStorage.getItem("feedback-form-state"))
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
    formEl.reset();
    localStorage.removeItem("feedback-form-state")

}

formEl.addEventListener('input', throttle(inputHandler, 500))
formEl.addEventListener('submit', formSubmitHandler)



