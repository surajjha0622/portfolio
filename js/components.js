// components.js
// Loads reusable HTML components

class ComponentLoader {

    async load(id, file) {

        const element = document.getElementById(id);

        if (!element) return;

        try {

            const response = await fetch(file);

            if (!response.ok) {
                throw new Error(`Unable to load ${file}`);
            }

            element.innerHTML = await response.text();

        }

        catch (error) {

            console.error(error);

        }

    }

}

const Components = new ComponentLoader();

async function initializeComponents() {

    await Components.load("navbar", "components/navbar.html");

    await Components.load("footer", "components/footer.html");

}

document.addEventListener("DOMContentLoaded", initializeComponents);