import GoogleSearchPage from '../pageObjects/GoogleSearchPage';

describe('Google Search - UI Test Suite', () => {
  beforeEach(() => {
    GoogleSearchPage.visit();
  });

  it('should perform a valid search and display results', () => {
    const searchQuery = 'Cypress testing framework';

    GoogleSearchPage.performSearch(searchQuery);
    GoogleSearchPage.verifySearchResultsExist();

    cy.url()
      .should('include', 'google.com/search')
      .and('include', `q=`);
  });

  it.only('should navigate to result page when clicking search result', () => {
    const searchQuery = 'GitHub';

    GoogleSearchPage.performSearch(searchQuery);
    GoogleSearchPage.verifySearchResultsExist();
    GoogleSearchPage.clickFirstSearchResult();

    cy.url().should('not.include', 'google.com/search');
  });
});
