import displayInterface from './displayInterface.js';
import addProjectItem from './addProjectItem.js';

import { compareAsc, format } from 'date-fns';

(() => {

    displayInterface();

    /* const tasksBtn = document.createElement('button');
    tasksBtn.classList.add('add-tasks');
    tasksBtn.textContent = '+Add Task';
    tasks.appendChild(tasksBtn);
    */
    let projectFormState = false;
    const addProjectsBtn = document.querySelector('.add-projects');
    const closeBtn = document.querySelector('.close-button');
    const addForm = document.querySelector('.add-form');
    const projectsTab = document.querySelector('.projects');
    const addBtn = document.querySelector('.add-button');
    const projectsList = document.querySelector('.projects-list');
    
    
    


    addProjectsBtn.addEventListener('click', () => {
        if(projectFormState == false) { 
            addForm.style.visibility = 'visible';
        }
    })

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addForm.style.visibility = 'hidden';
    })


    const projectFactory = (projectName, projectDate) => {
        return {projectName, projectDate};
    }

    const projects = [];
    
    let i = 0;
    let j = 1;

    
    
    

    function addProjectItem() {
        const projectItem = document.createElement('div');
        projectItem.classList.add(`project-item${j}`);
        projectsList.appendChild(projectItem);

        const projectName = document.createElement('p');
        projectName.classList.add(`name-${j}`);
        const projectDate = document.createElement('p');
        projectDate.classList.add(`date-${j}`);

        const projectListItem = document.querySelector(`.project-item${j}`);
        projectListItem.appendChild(projectName);
        projectListItem.appendChild(projectDate);
        
        

    }
    
    
    addBtn.addEventListener('click', (e) => {

        e.preventDefault();
        addProjectItem();
        const nameInput = document.querySelector('.input-name');
        const date = format(new Date(), 'yyyy-MM-dd');
        const project = projectFactory(nameInput.value, date);
        const projectName = document.querySelector(`.name-${j}`);
        const projectDate = document.querySelector(`.date-${j}`);
        projectName.textContent = project.projectName;
        projectDate.textContent = project.projectDate;
        
        j++;
        
        


        
        
        
        

    })
    

})()






