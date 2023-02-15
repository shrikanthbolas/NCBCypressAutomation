import Login from "../PageObjects/LoginPage.js"

describe('Login With POM', () => {
    
    it.skip('Verify the Login of the page', () => {
        cy.fixture("orangehrm2").then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            cy.wait(3000);
            data.forEach((userdata) => {
                const login = new Login();
                login.enterUserName(userdata.username);
                login.enterPassword(userdata.password);
                login.clickSubmit();
                cy.wait(3000)
            
                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click();
                }
                else{
                    console.log("yyasdgasyd"+userdata.expected)
                    login.verifyInvalidLoginMsg(userdata.expected);
                }
            });
        });
    })

    it.skip('Login with POM test',() =>{
        cy.fixture("orangehrm2").then((data)=>{
            cy.visit('http://opensource-demo.orangehrmlive.com/');
            
            data.forEach((userdata) => {
                cy.get("input[placeholder='Username']").type(userdata.username);
                cy.get("input[placeholder='Password']").type(userdata.password);
                cy.get("button[type='submit']").click();
                cy.wait(6000)
                
                if(userdata.username=='Admin' && userdata.password=='admin123')
                {
                    cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click();
                }
                else{
                    console.log("yyasdgasyd"+userdata.expected)
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text",userdata.expected);
                }
            });
        });
    });
  });