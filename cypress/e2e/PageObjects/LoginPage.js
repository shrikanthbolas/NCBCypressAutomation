class Login
{
    usernameEle="input[name='username']";
    passwordEle="input[name='password']";
    butnSubmitEle="button[type='submit']";
    labelVerifyMsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    verifyInvalidCredMsg=".oxd-text.oxd-text--p.oxd-alert-content-text";

    enterUserName(username){
        cy.get(this.usernameEle).type(username);
    }

    enterPassword(password){
        cy.get(this.passwordEle).type(password);
    }

    clickSubmit(){
        cy.get(this.butnSubmitEle).click();
    }

    //Verify the Dashboard text
    verifyLogin(){
        cy.get(this.labelVerifyMsg).should("have.text",'Dashboard');
    }

    verifyInvalidLoginMsg(InvalidMsg){
        cy.get(this.verifyInvalidCredMsg).should("have.text",InvalidMsg);
       
    }
}
export default Login;