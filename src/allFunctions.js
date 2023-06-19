const myFunctions = (() => {
  const getEl = (name) => document.querySelector(name);
  const getEls = (arr) => document.querySelectorAll(arr.join(', '));
  const makeEl = (type, className, parent) => {
    const el = document.createElement(type);
    el.classList.add(className);
    parent.appendChild(el);
    return el;
  };
  return { makeEl, getEl, getEls };
})();

export { myFunctions };
