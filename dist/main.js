(()=>{"use strict";(()=>{const e=document.querySelector("body"),t=document.createElement("div");t.classList.add("projects"),e.appendChild(t);const d=document.createElement("div");d.classList.add("tasks"),e.appendChild(d);const n=document.querySelector(".projects"),c=document.querySelector(".tasks"),o=document.createElement("button");o.classList.add("add-projects"),o.textContent="+Add Project",n.appendChild(o);const s=document.querySelector(".add-projects"),a=document.createElement("button");a.classList.add("add-tasks"),a.textContent="+Add Task",c.appendChild(a),s.addEventListener("click",(()=>{!function(){const e=document.querySelector(".projects"),t=document.createElement("div");t.classList.add("add-form"),e.appendChild(t);const d=document.querySelector(".add-form"),n=document.createElement("h3");n.textContent="New Project",d.appendChild(n);const c=document.createElement("br");d.appendChild(c);const o=document.createElement("form");o.classList.add("input-section"),d.appendChild(o);const s=document.querySelector(".input-section"),a=document.createElement("input");s.appendChild(a);const l=document.createElement("div");l.classList.add("buttons"),s.appendChild(l);const r=document.querySelector(".buttons"),u=document.createElement("button");u.classList.add("close-button"),u.textContent="Close",r.appendChild(u);const m=document.createElement("button");m.classList.add("add-button"),m.textContent="Add Project",r.appendChild(m)}()}))})()})();