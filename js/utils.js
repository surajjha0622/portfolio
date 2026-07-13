// utils.js
// Loads JSON files and caches them

class PortfolioUtils {

    constructor() {

        this.config = null;
        this.projects = null;

    }

    // Load Config

    async getConfig() {

        if (this.config !== null) {
            return this.config;
        }

        try {

            const response = await fetch("data/config.json");

            if (!response.ok) {
                throw new Error("Failed to load config.json");
            }

            this.config = await response.json();

            return this.config;

        }

        catch (error) {

            console.error(error);

            return null;

        }

    }

    // Load Projects

    async getProjects() {

        if (this.projects !== null) {
            return this.projects;
        }

        try {

            const response = await fetch("data/projects.json");

            if (!response.ok) {
                throw new Error("Failed to load projects.json");
            }

            this.projects = await response.json();

            return this.projects;

        }

        catch (error) {

            console.error(error);

            return [];

        }

    }

}

const Portfolio = new PortfolioUtils();