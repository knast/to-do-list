import displayInterface from './displayInterface.js';
import addProjectForm from './addProjectForm.js';
import addProjectList from './addProjectList';
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

    
    
    addBtn.addEventListener('click', (e) => {

        e.preventDefault();
        addProjectList();
        const nameInput = document.querySelector('.input-name').value;
        const date = format(new Date(), 'yyyy-MM-dd');
        const project = projectFactory(nameInput, date);
        const nameOfProject = document.querySelector('.name');
        const dateOfProject = document.querySelector('.date');
        nameOfProject.textContent = project.projectName;
        dateOfProject.textContent = project.projectDate;
        
        
        

    })
    

})()






