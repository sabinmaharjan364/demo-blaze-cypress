/// <reference types="cypress" />
// This js is used for checking the flow of Login.
describe("Login Form test", () => {
    beforeEach(() => {
        // we include it in our beforeEach function so that it runs before each test
        cy.visit("/");

        cy.get('#login2').click() // click on login button

        cy.get('#logout2').should('not.be.visible')      //checking if logout button is present in website. Make sure that loggedin user cannot login 
      })
   
      
    it("form with empty data ", () => {
      
        cy.get('#loginusername')
        .should('have.value', '');   // get the empty valued username   

        cy.get('#loginpassword')
        .should('have.value', '');  // get the empty valued password 

        cy.get('#logInModal .modal-footer .btn-primary')
        .contains('Log in').click(); // click the login button
    
      
    });

    it("Wrong data in Form Field", () => {
        

        cy.get('#loginusername')
        .type("try1")
        .should("have.value", "try1");

        cy.get('#loginpassword')
        .type("tiii")
        .should("have.value", "tiii");

        cy.get('#logInModal .modal-footer .btn-primary').click();
    });
    it("Match the credential data in the form", () => {
            
        cy.get('#loginusername')
        .type("try123");
        // .should("have.value", "testy");

        cy.get('#loginpassword')
        .type("try123");
        
        cy.get('#logInModal .modal-footer .btn-primary').click();
      
      
    });
 
      
  });
