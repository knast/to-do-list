export default function addProjectForm() {
    const projectsTab = document.querySelector('.projects');
    const addProject = document.createElement('div');
    addProject.classList.add('add-form');
    projectsTab.appendChild(addProject);
    
    const projectsAddForm = document.querySelector('.add-form');
    const title = document.createElement('h3');
    title.textContent = 'New Project';
    projectsAddForm.appendChild(title);
    projectsAddForm.appendChild('br');
    const form = document.createElement('form');
    

}