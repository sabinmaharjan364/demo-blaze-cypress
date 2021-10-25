/** Cart Test task division (due: Monday)
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
    it("Add to cart ", () => {
        cy.visit("/");  //Visit https://www.demoblaze.com/

        cy.get('.hrefch')
        .contains('Samsung galaxy s6')
        .click(); // click the particular item

        cy.get('.btn-success')
        .contains('Add to cart')
        .click(); //clicked add to cart


        cy.on('window:alert', (str) => {
            expect(str).to.equal('Product added')
        })        
        cy.on('window:confirm', () => true);        // clicked ok for alert

        cy.visit('https://www.demoblaze.com/cart.html')
        cy.get('.btn').contains('Place Order').click()

        // cy.get('form').within(($form) => {
            // you have access to the found form via
            // the jQuery object $form if you need it
          
            // cy.get() will only search for elements within form,
            // not within the entire document
        cy.get('input[id="name"]').type('try123')
        cy.get('input[id="country"]').type('Australia')
        cy.get('input[id="city"]').type('Toowoomba')
        cy.get('input[id="card"]').type('523612549')
        cy.get('input[id="month"]').type('01')
        cy.get('input[id="year"]').type('2023')

        cy.get('.btn-primary').contains('Purchase').click();

        cy.get('.confirm').contains('OK').click();
        //   })
        
    
        });
    
      
        
    })