import { elements } from '../elements/GoogleSearchElements';

class GoogleSearchPage {
  visit() {
    cy.visit('/');
    return this;
  }

  performSearch(query) {
    cy.get(elements.searchInput)
      .should('be.visible')
      .clear()
      .type(`${query}{enter}`);
    
    cy.get(elements.searchResultsContainer, { timeout: 10000 })
      .should('be.visible');
    
    return this;
  }

  verifySearchResultsExist() {
    cy.get(elements.searchResultsContainer)
      .should('be.visible');
    
    cy.get(elements.searchResultItems)
      .should('have.length.greaterThan', 0);
    
    return this;
  }

  clickFirstSearchResult() {
    cy.get(elements.searchResultLinks)
      .first()
      .should('be.visible')
      .click();
    
    return this;
  }
}

export default new GoogleSearchPage();
