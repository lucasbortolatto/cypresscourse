/// <reference types="Cypress" />

describe("IPhone 8 nas casas bahia", () => {
    it("Procura Iphone 8 e poe no carrinho", () =>{
        cy.visit("https://www.google.com.br/"); 
        cy.get('.gLFyf').type("IPhone 8");
        cy.get('.aajZCb > .VlcLAe > center > .gNO89b').click();
        cy.contains("https://www.apple.com/br/shop/buy-iphone/iphone-8").click();

    })
})