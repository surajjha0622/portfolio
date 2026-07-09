// ================================
// LOAD PROJECTS FROM JSON
// ================================

async function loadProjects() {

    try {

        const response = await fetch("data/projects.json");
        const projects = await response.json();

        const container = document.getElementById("projects-container");

        if (!container) return;

        container.innerHTML = "";

        projects.forEach(project => {

            const techStack = project.tech
                .map(tech => `<span>${tech}</span>`)
                .join("");

            const statusColor =
                project.status === "Completed"
                    ? "#38bdf8"
                    : project.status === "Prototype"
                    ? "#facc15"
                    : "#22c55e";

            const card = document.createElement("div");

            card.className = "card";

            card.innerHTML = `

                <img src="${project.image}" alt="${project.title}">

                <h3>${project.title}</h3>

                <p>${project.description}</p>

                <div class="tech-stack">
                    ${techStack}
                </div>

                <p style="color:${statusColor}; font-weight:600;">
                    ${project.status}
                </p>

                <div class="progress">
                    <div class="progress-fill"
                    style="width:${project.progress}%"></div>
                </div>

                <p>${project.progress}% Complete</p>

                <div class="project-buttons">

                    <a href="${project.github}"
                    target="_blank"
                    class="btn">
                        GitHub
                    </a>

                </div>

            `;

            container.appendChild(card);

        });

    }

    catch (error) {

        console.error(error);

    }

}

loadProjects();