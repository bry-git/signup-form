const form =  document.getElementById('body')

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const element = document.createElement('span')
    element.textContent = "a new element!" 
    form.appendChild(element)
})