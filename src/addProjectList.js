import { compareAsc, format } from 'date-fns';

export default function addProjectToList() {

    
    const projectsList = document.querySelector('.projects-list');

    const projectListItem = document.createElement('li');
    projectListItem.classList.add('project-item');
    projectsList.appendChild(projectListItem);
    const projectItem = document.querySelector('.project-item');

    const listItem = document.createElement('div');
    listItem.classList.add('list-item');
    projectItem.appendChild(listItem);

    const listContainer = document.querySelector('.list-item');
    const nameOfProject = document.createElement('p');
    const dateOfProject = document.createElement('p');
    nameOfProject.classList.add('name');
    dateOfProject.classList.add('date');

    listContainer.appendChild(nameOfProject);
    listContainer.appendChild(dateOfProject);

    

}