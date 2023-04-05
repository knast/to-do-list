export default function displayInterface() {

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

    
    const addProject = document.createElement('div');
    addProject.classList.add('add-form');

    projectsTab.appendChild(addProject);
    
    const projectsAddForm = document.querySelector('.add-form');
    const title = document.createElement('h3');
    title.textContent = 'New Project';

    projectsAddForm.appendChild(title);

    const line = document.createElement('br');
    projectsAddForm.appendChild(line);

    const form = document.createElement('form');
    form.classList.add("input-section");

    projectsAddForm.appendChild(form);

    const addForm = document.querySelector('.input-section');
    const labelName = document.createElement('label');
    labelName.setAttribute('id', 'name-project');
    labelName.textContent = 'Name:'

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'name-project');
    inputName.setAttribute('type', 'text');
    inputName.classList.add('input-name');
    addForm.appendChild(labelName);
    addForm.appendChild(inputName);    
    
    const buttons = document.createElement('div');
    buttons.classList.add('buttons');
    addForm.appendChild(buttons);

    const buttonSection = document.querySelector('.buttons');
    const closeForm = document.createElement('button');
    closeForm.classList.add('close-button');
    closeForm.textContent = 'Close';
    const closeBtn = document.querySelector('.close-button');

    buttonSection.appendChild(closeForm);
    const addBtn = document.createElement('button');
    addBtn.classList.add('add-button');
    addBtn.textContent = 'Add Project';

    buttonSection.appendChild(addBtn);

    const projectsListHeader = document.createElement('h3');
    projectsListHeader.classList.add('list-header');
    projectsListHeader.textContent = 'Projects';
    projectsTab.appendChild(projectsListHeader);
    const projectsList = document.createElement('div');
    projectsList.classList.add('projects-list');
    projectsTab.appendChild(projectsList);

    const listProject = document.querySelector('.projects-list');

    
    


}