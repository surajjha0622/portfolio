// projects.js
// Renders Featured Projects & All Projects

async function renderProjects() {

    const projects = await Portfolio.getProjects();

    if (!projects) return;

    // Home Page Featured Section
    const featuredContainer = document.getElementById("featured-projects");

    if (featuredContainer) {

        const featured = projects.filter(project => project.featured);

        featuredContainer.innerHTML = `

<section class="projects-section">

    <div class="container">

        <div class="section-header">

            <h2>Featured Projects</h2>

            <p>
                A selection of projects I'm currently working on or proud of.
            </p>

        </div>

        <div class="projects-grid">

            ${featured.map(createProjectCard).join("")}

        </div>

    </div>

</section>

`;

    }

    // Projects Page
    const projectsContainer = document.getElementById("projects-container");

    if (projectsContainer) {

        projectsContainer.innerHTML = `

<div class="projects-grid">

    ${projects.map(createProjectCard).join("")}

</div>

`;

    }

}

// Creates One Project Card

function createProjectCard(project) {

    let badgeColor = "badge-blue";

    if (project.status === "Active")
        badgeColor = "badge-green";

    if (project.status === "Prototype")
        badgeColor = "badge-yellow";

    return `

<div class="project-card">

    <div class="project-image">

        <img
            src="${project.image}"
            alt="${project.title}"
            onerror="this.src='assets/images/placeholder.png'">

    </div>

    <div class="project-content">

        <div class="project-top">

            <h3>${project.title}</h3>

            <span class="status ${badgeColor}">

                ${project.status}

            </span>

        </div>

        <p class="project-description">

            ${project.description}

        </p>

        <div class="tech-stack">

            ${project.tech.map(tech => `

                <span>${tech}</span>

            `).join("")}

        </div>

        <div class="progress">

            <div
                class="progress-fill"
                style="width:${project.progress}%">

            </div>

        </div>

        <p class="progress-text">

            ${project.progress}% Complete

        </p>

        <div class="project-buttons">

            ${project.github !== "" ? `

            <a
                href="${project.github}"
                target="_blank"
                class="btn">

                GitHub

            </a>

            ` : ""}

            ${project.demo !== "" ? `

            <a
                href="${project.demo}"
                target="_blank"
                class="btn btn-outline">

                Live Demo

            </a>

            ` : ""}

        </div>

    </div>

</div>

`;

}

document.addEventListener("DOMContentLoaded", renderProjects);