/* eslint-disable no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://localhost:5173/",
        execTimeout: 8 * 1000,
        specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
