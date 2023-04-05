export default function addProjectForm() {


    

    const projectsTab = document.querySelector('.projects');
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
    

    

    


}