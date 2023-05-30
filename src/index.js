
const elementMaker = (type, className, parent, text) => {
    const element = document.createElement(type)
    element.classList.add(className)
    element.innerText = text
    parent.appendChild(element)
    return element
}

const content = document.querySelector('.content')
const test = elementMaker('div', 'test', content, "Helloooo!!")