import Login from "../PageObjects/LoginPage.js"
import Admin from "../PageObjects/AdminPage.js"

describe('Add Users With POM', () => {
    it.skip('Verify the Add UsersAyyyyoooo Page', () => {
        cy.fixture("orangehrm").then((data)=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            cy.wait(2000);
            const login = new Login();
            login.enterUserName(data.username);
            login.enterPassword(data.password);
            login.clickSubmit();
            cy.wait(2000);
            if(data.username=='Admin' && data.password=='admin123')
            {
                //Verify the Dashboard text
                login.verifyLogin();
            }
            else{
                console.log("yyasdgasyd"+data.expected)
                login.verifyInvalidLoginMsg(data.expected);
            }
            //Create Object for AdminPage
            const admin = new Admin();
            
            //Click on Admin
            //cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click();
            //cy.wait(1000);
            //cy.get('.oxd-button > i').click();

            admin.clickAdminMenuLink();
            cy.wait(1000);
            admin.clickAddBtn();
        });
    });
});