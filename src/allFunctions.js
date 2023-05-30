const elementMaker = (type, className, parent, text = "") => {
    const element = document.createElement(type);
    element.classList.add(className);
    element.innerText = text;
    parent.appendChild(element);
    return element;
  };

export { elementMaker }