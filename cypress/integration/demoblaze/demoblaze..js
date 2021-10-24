
describe('Demo Blaze', () => {
    it('Login test', () => {
      cy.visit('https://www.demoblaze.com')
    //   cy.contains('type')
      cy.get('.btn').click() // click on login button
    }),
    it('signup process', () => {
        cy.visit('https://www.demoblaze.com')
    }),
    it('check login button',()=>{
        cy.get('.nav-item').contains('About') // Yield el in .nav containing 'About'
cy.contains('Hello') // Yield first el in document containing 'Hello'
 // yields input[type='submit'] element then clicks it
cy.get('form').contains('submit the form!').click()
    })
  })
  