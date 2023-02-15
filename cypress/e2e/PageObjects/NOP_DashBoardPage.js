class DashBoard
{
    logoNOPImage=".brand-image-xl.logo-xl";
    passwordEle="#Password";
    butnSubmitEle="button[type='submit']";
    verifyUserNameTextMsg="nav[class='main-header navbar navbar-expand-md navbar-dark bg-dark'] li:nth-child(2) a";
    logOutLink = "#navbarText > ul >li:nth-child(3) > a";
    //labelVerifyMsg=".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    //verifyInvalidCredMsg=".oxd-text.oxd-text--p.oxd-alert-content-text";

    verifyLogoImage(){
        cy.get('logoNOPImage').should('contains' , 'logo.png');
    }

    verifyTitleOfDashBoard(){
        cy.title().should('eq','Dashboard / nopCommerce administration');
        //cy.get('body > div:nth-child(3) > aside:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click();
        //cy.get('body > div:nth-child(3) > aside:nth-child(2) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > nav:nth-child(2) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click();
        //cy.get('.os-viewport>div>nav>ul>li:nth-child(2)>ul>li>a[href="/Admin/Product/List"]').click();
        //cy.get('a[class="btn btn-primary"]').click();
    }

    //Verify the Dashboard text
    verifyLoginUserNameText(userNameText){
        cy.get(this.verifyUserNameTextMsg).should("have.text",userNameText);
    }

    //Click on Logout button.
    clickOnLogOut(userNameText){
        cy.get(this.logOutLink).click();
    }

    // verifyInvalidLoginMsg(InvalidMsg){
    //     cy.get(this.verifyInvalidCredMsg).should("have.text",InvalidMsg);
    // }
}
export default DashBoard;