import './main.css';
import './navbar.css';
import data from './data.json';
import { elementMaker } from './allFunctions';
import { makeNavbar } from './navbar';
// import sample from './images/rest.gif'

const content = document.querySelector('.content');

makeNavbar(data.projects, content);

// MAKE MAIN BODY
const mainBody = elementMaker('div', 'main-body', content);

// PROJECT CONTAINER
const projectContainerMain = elementMaker(
  'div',
  'project-container-main',
  mainBody
)
// MEDIA
const preview = elementMaker('div', 'preview', projectContainerMain);
preview.style.backgroundImage = `url(${data.projects[0].media.image})`;
preview.addEventListener('mouseover', function () {
  console.log('play videooooo');
});
// TEXT
const title = elementMaker(
  'div',
  'title',
  projectContainerMain,
  data.projects[0].name
);
const description = elementMaker(
  'div',
  'description',
  projectContainerMain,
  data.projects[0].description
);
const live = elementMaker('a', 'live', projectContainerMain, 'see it live');
live.href = data.projects[0].links.live;
live.style.display = 'block'
const code = elementMaker('a', 'code', projectContainerMain, 'see the code');
code.href = data.projects[0].links.code;
code.style.display = 'block'
