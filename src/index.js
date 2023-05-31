import './main.css';
import './navbar.css';
import data from './data.json';
import { elementMaker } from './allFunctions';
import { makeNavbar } from './navbar';
// import sample from './images/rest.gif'

const content = document.querySelector('.content');

makeNavbar(data.projects, content);

const mainBody = elementMaker('div', 'main-body', content);

// PROJECT CONTAINER
const fillMain = (array, parent) => {
  for (let i = 0; i < array.length; i++) {
    const projectContainerMain = elementMaker(
      'div',
      'project-container-main',
      parent
    );
    // START
    const preview = elementMaker('div', 'preview', projectContainerMain);
    if (array[i].media == undefined) {
      preview.style.backgroundImage = `url(${array[0].media.image})`;
    } else {
      preview.style.backgroundImage = `url(${array[i].media.image})`;
    }
    preview.addEventListener('mouseover', function () {
      console.log('play videooooo');
    });
    // MIDDLE
    const title = elementMaker(
      'div',
      'title',
      projectContainerMain,
      array[i].name.toUpperCase()
    );
    // const description = elementMaker(
    //   'div',
    //   'description',
    //   projectContainerMain,
    //   array[i].description
    // );

    // END
    const containerEnd = elementMaker(
      'div',
      'container-end',
      projectContainerMain
    );

    const live = elementMaker('a', 'live', containerEnd, 'live');
    live.href = array[i].links.live;
    live.style.display = 'block';
    const code = elementMaker('a', 'code', containerEnd, 'code');
    code.href = array[i].links.code;
    code.style.display = 'block';
  }
};

fillMain(data.projects, mainBody);
