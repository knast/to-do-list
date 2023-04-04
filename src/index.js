import displayInterface from './displayInterface.js';
import addProjectForm from './addProjectForm.js';

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


    addProjectsBtn.addEventListener('click', () => {
        if(projectFormState == false) { 
            addForm.style.visibility = 'visible';
        }
    })

    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addForm.style.visibility = 'hidden';
    })
    
    

})()






