class Admin
{
    adminLinkEle="body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)";
    addMenu = ".--visited > .oxd-topbar-body-nav-tab-item";
    addBtnEle=".orangehrm-header-container > .oxd-button";
    
    clickAdminMenuLink(){
        cy.get(this.adminLinkEle).trigger('mouseover').click();
    }

    clickAddBtn(){
        //cy.scrollTo('top',0);
        //cy.scrollTo(1000, 0);
        //cy.get(this.addBtnEle).scrollIntoView().click();
        //cy.get(this.addBtnEle).trigger('mouseover').click();
        //cy.forceClick();
        cy.get(this.addMenu).click();
        cy.get('.oxd-dropdown-menu > li').click();
        cy.get(this.addBtnEle).click();
        cy.wait(1000)
        //cy.get('.oxd-select-text--error').click();
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        cy.wait(100)
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click();
    }
}
export default Admin;