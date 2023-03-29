
(() => {
    const body = document.querySelector('body');
    const projectsTab = document.createElement('div');
    projectsTab.classList.add('projects');
    body.appendChild(projectsTab);

    const tasksTab = document.createElement('div');
    tasksTab.classList.add('tasks');
    body.appendChild(tasksTab);


})()