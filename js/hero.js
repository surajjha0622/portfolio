// hero.js
// Renders Hero Section

async function renderHero() {

    const config = await Portfolio.getConfig();

    if (!config) return;

    const hero = document.getElementById("hero");

    if (!hero) return;

    const buttons = config.buttons
        .map(button => {

            const cssClass =
                button.type === "primary"
                    ? "btn"
                    : "btn btn-outline";

            const target =
                button.link.startsWith("http")
                    ? 'target="_blank"'
                    : "";

            return `
                <a
                    href="${button.link}"
                    class="${cssClass}"
                    ${target}>
                    ${button.text}
                </a>
            `;

        })
        .join("");

    hero.innerHTML = `

<section class="hero-section">

    <div class="hero-content">

        <div class="hero-text">

            <p class="hero-label">

                👋 Welcome to my portfolio

            </p>

            <h1>

                ${config.hero.name}

            </h1>

            <h2>

                ${config.hero.tagline}

            </h2>

            <p>

                ${config.hero.subtitle}

            </p>

            <div class="hero-buttons">

                ${buttons}

            </div>

        </div>

        <div class="hero-image">

            <img

                src="${config.hero.profileImage}"

                alt="${config.hero.name}"

                onerror="this.src='assets/images/placeholder.png'"

            >

        </div>

    </div>

</section>

`;

}

document.addEventListener("DOMContentLoaded", renderHero);