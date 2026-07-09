// =============================================
// Portfolio Engine
// stats.js
// Renders Homepage Statistics
// =============================================

async function renderStats() {

    const config = await Portfolio.getConfig();

    if (!config) return;

    const statsSection = document.getElementById("stats");

    if (!statsSection) return;

    const stats = config.stats;

    const cards = [

        {
            value: stats.projects + "+",
            label: "Projects"
        },

        {
            value: stats.activeProjects,
            label: "Active Builds"
        },

        {
            value: stats.technologies,
            label: "Technologies"
        },

        {
            value: stats.years + "+",
            label: "Years Learning"
        }

    ];

    statsSection.innerHTML = `

<section class="stats-section">

    <div class="container">

        <div class="stats-grid">

            ${cards.map(card => `

                <div class="stat-card">

                    <h2>${card.value}</h2>

                    <p>${card.label}</p>

                </div>

            `).join("")}

        </div>

    </div>

</section>

`;

}

document.addEventListener("DOMContentLoaded", renderStats);