import './navbar.css';
import data from './data.json';
import { elementMaker } from './allFunctions';
import { makeNavbar } from './navbar'
// import sample from './images/rest.gif'

const content = document.querySelector('.content');
makeNavbar(data.projects, content);
