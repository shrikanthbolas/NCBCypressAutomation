import DashBoard from "../PageObjects/NOP_DashBoardPage.js";
import NopLogin from "../PageObjects/NOPLoginPage.js";

describe('Login With NOP POM', () => {
    const dashboard = new DashBoard();
    const login = new NopLogin();

    beforeEach('Launch URL', () =>{
        cy.visit('https://admin-demo.nopcommerce.com/');
        cy.wait(2000);
    });

    it('Verify the title of the NOP Commerce Login Page', () => {
        /*
        Verify the title of the login page.
        */
        login.verifyTitleLoginPage();
        login.verifyAllImplicitAssertions();
    });

    it('Verify the text of the NOP Commerce Login Page', () => {
        /*
        Verify the text of the login page. - Admin area demo
        */
        login.verifyTextOfLoginPage();
    });

    it('Verify the login functionality in NOPCommerce', () => {
        //fixture method --- pass the json file name which holds the testdata.
        cy.fixture("nopcommercelogin").then((data)=>{
            data.forEach((userdata) => {
                login.enterUserName(userdata.username);
                login.enterPassword(userdata.password);
                login.clickSubmit();
                cy.wait(2000)
                if(userdata.username=='admin@yourstore.com' && userdata.password=='admin')
                {
                    //const dashboard = new DashBoard();
                    dashboard.verifyTitleOfDashBoard();
                    dashboard.verifyLoginUserNameText(userdata.expected);
                    dashboard.clickOnLogOut();
                    //dashboard.verifyLogoImage();
                }
                else{
                    console.log("login failed");
                    //Handle the Error message - validated message.
                    //login.verifyInvalidLoginMsg(userdata.expected);
                }
            });
        });
    });

    //negative testcases.
    it('Verify the NOP Commerce Login of the page ', () => {
        //fixture method --- pass the json file name which holds the testdata.
        cy.fixture("nopcommerceinvalidlogin").then((data)=>{
            /*
            Verify the title of the login page.
            */
            //login.verifyTitleLoginPage();
            //login.verifyAllImplicitAssertions();

            data.forEach((userdata) => {
                login.enterUserName(userdata.username);
                login.enterPassword(userdata.password);
                login.clickSubmit();
                cy.wait(3000)
                if(userdata.username=='admin@yourstore.com' && userdata.password=='admin')
                {
                    //const dashboard = new DashBoard();
                    dashboard.verifyLoginUserNameText(userdata.expected);
                    //dashboard.verifyTitle();
                    //dashboard.verifyLogoImage();
                }
                else{
                    //console.log("yyasdgasyd"+userdata.expected)
                    //login.verifyInvalidLoginMsg(userdata.expected);
                }
            });
        });
    });

    afterEach('Launch URL', () =>{
        //cy.clear();
    });
});