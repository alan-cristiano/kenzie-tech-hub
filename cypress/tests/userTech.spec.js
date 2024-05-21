describe("E2E test: Dashboard page", () => {
    const tech = {
        title: "JavaScript",
        status: "Iniciante",
    };

    const user = {
        email: "name@email.com",
        password: "12345678!Aa",
    };

    it("should be possible a user to register, update and delete a technology successfully", () => {
        cy.visit("/");
        cy.getBySel("user-email").type(user.email);
        cy.getBySel("user-email").should("have.value", user.email);

        cy.getBySel("user-password").type(user.password);
        cy.getBySel("user-password").should("have.value", user.password);

        cy.getBySel("user-button").click();

        cy.getBySel("add-tech").click();

        cy.getBySel("tech-name").type(tech.title);
        cy.getBySel("tech-name").should("have.value", tech.title);

        cy.getBySel("tech-status").select(tech.status);
        cy.getBySel("tech-status").should("have.value", tech.status);

        cy.getBySel("create-tech-form").within(() => {
            cy.getBySel("user-button").click();
        });

        cy.getBySel("tech-title").should("be.visible");
        cy.getBySel("tech-status").should("be.visible");

        cy.getBySel("edit-tech-button").click();

        cy.getBySel("edit-tech-status").select("Avançado");
        cy.getBySel("edit-tech-status").should("have.value", "Avançado");

        cy.getBySel("edit-tech-form").within(() => {
            cy.getBySel("user-button").click();
        });

        cy.getBySel("delete-tech-button").click();

        cy.getBySel("tech-card").should("not.exist");

        cy.getBySel("dashboard-header").within(() => {
            cy.getBySel("user-button").click({ force: true });
        });
    });
});
