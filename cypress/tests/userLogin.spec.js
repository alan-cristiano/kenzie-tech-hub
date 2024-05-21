describe("E2E test: Login page", () => {
    const userMock = {
        email: "email@mail.com",
        password: "12345678!Aa",
    };

    it("should be possible a user to login successully", () => {
        cy.intercept("POST", "/sessions", {
            statusCode: 200,
        }).as("loginUser");

        cy.visit("/");
        cy.getBySel("user-email").type(userMock.email);
        cy.getBySel("user-email").should("have.value", userMock.email);

        cy.getBySel("user-password").type(userMock.password);
        cy.getBySel("user-password").should("have.value", userMock.password);

        cy.getBySel("user-button").click();

        cy.wait("@loginUser");

        cy.get("@loginUser").its("response.statusCode").should("eq", 200);

        cy.get("@loginUser").its("request.body").should("deep.equal", {
            email: userMock.email,
            password: userMock.password,
        });
    });
});
