import './main.css';
import data from './data.json';
import { myFunctions } from './allFunctions';
// import sample from './images/rest.gif'

const getEl = myFunctions.getEl;
const makeEl = myFunctions.makeEl;

const content = getEl('.content');

console.log(data.projects.length)

for (let i = 0; i < data.projects.length; i++) {
    const container = makeEl('div', 'container', content)
    container.style.backgroundImage = `url(${data.projects[i].media.image})`

    container.addEventListener('click', ()=>{
        console.log(data.projects[i].links.live);
    })
}