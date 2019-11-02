/// <reference types="Cypress" />

describe("Testing of EA App", () => {
    it("Login application", () =>{
        cy.visit("http://eaapp.somee.com/"); 

        //Clicking the login button
        //cy.contains("Login").click();

        //Checking the login button text and click on it
        cy.contains("Login").then(($link) => {
            const linkText = $link.text();
            expect(linkText).is.eql('Login');
        }).click();

        cy.url().should("include", "/Account/Login");
        cy.get('#UserName').type("admin");
        cy.get('#Password').type("password");

        cy.get(".btn").click();

        //Click Empoyee List
        cy.contains("Employee List").click();

        //Table
        cy.get('.table').find('tr').contains('Prashant').parent().contains('Benefits').click();

    })
})