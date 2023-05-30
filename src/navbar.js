import { elementMaker } from './allFunctions';

const makeNavbar = (array, parent) => {
  const navbar = elementMaker('div', 'navbar', parent);
  // NAVBAR START
  const navbarStart = elementMaker('div', 'navbar-start', navbar);
  const dashboard = elementMaker('div', 'dashboard', navbarStart);
  elementMaker('div', 'dashboard-image', dashboard);
  elementMaker('div', 'dashboard-text', dashboard, 'Dashboard');
  // NAVBAR MID
  const navbarMid = elementMaker('div', 'navbar-mid', navbar);
  const home = elementMaker('div', 'home', navbarMid);
  elementMaker('div', 'home-image', home);
  elementMaker('div', 'home-text', home, 'Home');
  const projects = elementMaker('div', 'projects', navbarMid);
  elementMaker('div', 'projects-image', projects);
  elementMaker('div', 'projects-text', projects, 'All Projects');
  //PROJECTS CONTAINER
  const projectContainer = elementMaker('div', 'project-container', navbarMid);
  for (let i = 0; i < array.length; i++) {
    const project = elementMaker('div', 'project', projectContainer);
    elementMaker('div', 'project-image', project);
    elementMaker('div', 'project-text', project, `Project ${array[i].name}`);
  }
  // GAP
  const gap = elementMaker('div', 'gap', navbar);
  // NAVBAR END
  const navbarEnd = elementMaker('div', 'navbar-end', navbar);
  const profile = elementMaker('div', 'profile', navbarEnd);
  elementMaker('div', 'profile-image', profile);
  elementMaker('div', 'profile-text', profile, 'Profile');
};

export { makeNavbar };
