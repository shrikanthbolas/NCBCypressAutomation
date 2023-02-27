class NopLogin
{
    usernameEle="#Email";
    passwordEle="#Password";
    butnSubmitEle="button[type='submit']";
    adminAreaText="div[class='page-title'] > h1";
    //labelVerifyMsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    verifyInvalidCredMsg=".message-error.validation-summary-errors";
    verifyEnterEmail="#Email-error";

    enterUserName(username){
        cy.get(this.usernameEle).clear();
        cy.get(this.usernameEle).type(username);
    }

    enterPassword(password){
        cy.get(this.passwordEle).clear();
        cy.get(this.passwordEle).type(password);
    }

    clickSubmit(){
        cy.get(this.butnSubmitEle).click();
    }

    //Verify the title of the login page.
    verifyTitleLoginPage(){
        cy.title().should('eq','Your store. Login');
    }

    //Verify the all implicit assertions - include,eq,contain
    verifyAllImplicitAssertions(){
        cy.url().should('include','admin-demo');
        cy.url().should('eq','https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
        cy.url().should('contain','nopcommerce.com');

        //using and 
        /*cy.url().should('include','admin-demo')
        .and('eq','https://admin-demo.nopcommerce.com/')
        .and('contain','nopcommerce.com')
        .and('not.contain','ncb');
        */
    }

    //Verify the text of the login page.
    verifyTextOfLoginPage(){
        cy.get(this.adminAreaText).should("have.text",'Admin area demo');
    }

    verifyInvalidLoginMsg(InvalidMsg){
        cy.get(this.verifyInvalidCredMsg).should('contain',InvalidMsg);
    }

    verifyInvalidLoginMsg_EnterEmail(InvalidMsg){
        cy.get(this.verifyEnterEmail).should('have.text',InvalidMsg);
    }
}
export default NopLogin;