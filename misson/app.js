const container = document.getElementById("task-container");

for (let i = 1; i <= 309; i++) {
    const div = document.createElement("div");

    const checked = localStorage.getItem(`task-${i}`) === "true";

    div.innerHTML = `
        
            <input type="checkbox" id="task-${i}" ${checked ? "checked" : ""}> .${i}
            
        
    `;

    const checkbox = div.querySelector("input");

    checkbox.addEventListener("change", () => {
        localStorage.setItem(`task-${i}`, checkbox.checked);
    });

    container.appendChild(div);
}