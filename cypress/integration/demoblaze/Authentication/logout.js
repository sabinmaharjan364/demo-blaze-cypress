/// <reference types="cypress" />
// This js is used for checking the flow of Logout.
describe("Logout test", () => {
    
    beforeEach(() => {
        // we include it in our beforeEach function so that it runs before each test
        cy.visit("/");     
      })
    it("Logout", () => {
        cy.get('#logout2').should('be.visible');
        // cy.get('#logInModal').should('not.exist')
        cy.get('#logout2').click(); // click on login button
        
       
    });
      
   
    
  });