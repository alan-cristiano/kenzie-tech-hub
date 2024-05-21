describe("E2E test: Register page", () => {
    const userMock = {
        name: "Name",
        email: "name@email.com",
        password: "12345678!Aa",
        bio: "Bio",
        contact: "Phone",
        course_module: "Primeiro módulo (Introdução ao Front End)",
    };

    it("should register a new user successully", () => {
        cy.intercept("POST", "/users", {
            statusCode: 201,
        }).as("registerUser");

        cy.visit("/register");
        cy.getBySel("user-name").type(userMock.name);
        cy.getBySel("user-name").should("have.value", userMock.name);

        cy.getBySel("user-register-email").type(userMock.email);
        cy.getBySel("user-register-email").should("have.value", userMock.email);

        cy.getBySel("user-register-password").type(userMock.password);
        cy.getBySel("user-register-password").should(
            "have.value",
            userMock.password
        );

        cy.getBySel("user-register-confirm-password").type(userMock.password);
        cy.getBySel("user-register-confirm-password").should(
            "have.value",
            userMock.password
        );

        cy.getBySel("user-bio").type(userMock.bio);
        cy.getBySel("user-bio").should("have.value", userMock.bio);

        cy.getBySel("user-contact").type(userMock.contact);
        cy.getBySel("user-contact").should("have.value", userMock.contact);

        cy.getBySel("user-course-module").select(userMock.course_module);
        cy.getBySel("user-course-module").should(
            "have.value",
            userMock.course_module
        );

        cy.getBySel("user-button").click();

        cy.wait("@registerUser");

        cy.get("@registerUser").its("response.statusCode").should("eq", 201);

        cy.get("@registerUser")
            .its("request.body")
            .should("deep.equal", userMock);
    });
});
