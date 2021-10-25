/** Login Test task division (due: Monday)
 * 
 * Basic:
 * 1. check test if the form field is empty
 * 2. check test if the form field have a wrong username and password value
 * 3. check test if the form field have a right username and password value
 * 
 * Advance:
 * check if we can pass the injection code 
 * 
 * 
 * **/
/// <reference types="cypress" />
// Checking the flow of Login. I have signup in website using try123 username and try123 as a password.


describe("Login Form test", () => {
    beforeEach(() => {
        // we include it in our beforeEach function so that it runs before each test
        cy.visit("/");  //Visit https://www.demoblaze.com/

        cy.get('#login2').click() // click on login button

        cy.get('#logout2').should('not.be.visible')      //checking if logout button is present in website. Make sure that loggedin user cannot login 
      })
   
      
    it("login with empty data ", () => {
      
        cy.get('#loginusername')
        .should('have.value', '');   // get the empty valued username   

        cy.get('#loginpassword')
        .should('have.value', '');  // get the empty valued password 

        cy.get('#logInModal .modal-footer .btn-primary')
        .contains('Log in').click(); // click the login button
    
    });

    it("Login with Invalid data", () => {
        
        // fill the textbox with try1 content
        cy.get('#loginusername')
        .type("try1");
        // .should("have.value", "try1");

        // fill the textbox with try1 content
        cy.get('#loginpassword')
        .type("tiii");
        // .should("have.value", "tiii");

        //click the login button and username and password field's data are passed through javascript function.
        cy.get('#logInModal .modal-footer .btn-primary').click();   

    });
    it("Login with case sensitive", () => {
        cy.log('filling out user name') // Checking username in log

        cy.get('#loginusername')
        .type("TrY123");
        // .should("have.value", "testy");
        
        cy.log('filling out password') // Checking password in log

        cy.get('#loginpassword')
        .type("try123");

       
        //click the login button and username and password field's data are passed through javascript function.
        cy.get('#logInModal .modal-footer .btn-primary').click();
         // UI should reflect this user being logged in
        // cy.get('#nameofuser').should('contain', 'Welcome try123')
      
    });

    it("Login with valid data", () => {
        cy.log('filling out user name') // Checking username in log

        cy.wait(1000);
        cy.get('#loginusername')
        .type("try123");
        // .should("have.value", "testy");
        
        cy.log('filling out password') // Checking password in log

        cy.get('#loginpassword')
        .type("try123");

        //click the login button and username and password field's data are passed through javascript function.
        cy.get('#logInModal .modal-footer .btn-primary').click();
         // UI should reflect this user being logged in
        // cy.get('#nameofuser').should('contain', 'Welcome try123')
    });
    // it("Logout", () => {
    //     cy.wait(1000);

    //     cy.get('#logout2').should('be.visible');
    //     // cy.get('#logInModal').should('not.exist')
    //     cy.get('#logout2').click(); // click on login button
        
       
    // });
       
 
      
  });
