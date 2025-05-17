document.addEventListener("DOMContentLoaded", () => {
    // for the date 
    const dateElement = document.getElementById("date")
    const options = { weekday: 'long', month: 'long', day: 'numeric' }
    const today = new Date()
    dateElement.textContent = today.toLocaleDateString('en-US', options)

    // for the submit button
    const form = document.getElementById("todo-form")
    const input = document.getElementById("todo-input")
    form.addEventListener("submit", function(e){
        e.preventDefault()
        if(input.value.trim() !== ""){
            addItem(input.value.trim())
            input.value = ""
        }
    })



})
let addItem = (inputBx) => {
    const list = document.getElementById("todo-list")
    let listItem = document.createElement("li")
    listItem.className = "todo-item"
    listItem.innerHTML = `<input type = "checkbox" />  <label> ${inputBx}</label>  <button class = "delete-btn">❌</button>`
    list.appendChild(listItem)

    // deleting function for the delete button
    listItem.querySelector('.delete-btn').addEventListener('click', function() {
        listItem.remove()
    })
    list.appendChild(listItem)
}