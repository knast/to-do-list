import addProjectForm from './addProjectForm.js';

(() => {

    const body = document.querySelector('body');
    const projectsTab = document.createElement('div');
    projectsTab.classList.add('projects');
    body.appendChild(projectsTab);

    const tasksTab = document.createElement('div');
    tasksTab.classList.add('tasks');
    body.appendChild(tasksTab);

    const projects = document.querySelector('.projects');
    const tasks = document.querySelector('.tasks');

    const projectsBtn = document.createElement('button');
    projectsBtn.classList.add('add-projects');
    projectsBtn.textContent = '+Add Project';
    projects.appendChild(projectsBtn);
    const addProjectsBtn = document.querySelector('.add-projects');

    const tasksBtn = document.createElement('button');
    tasksBtn.classList.add('add-tasks');
    tasksBtn.textContent = '+Add Task';
    tasks.appendChild(tasksBtn);

    let projectFormState = false;

    addProjectsBtn.addEventListener('click', () => {
        if(projectFormState == false) { 
            addProjectForm();
            projectFormState = true;
        }
    })
    

})()

