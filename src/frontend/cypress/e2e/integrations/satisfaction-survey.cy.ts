describe('Satisfaction Survey Endpoints', () => {
    it('should CREATE a satisfaction survey', () => {
        cy.request('POST', 'http://localhost:3000/satisfaction-survey', {
            'survey': [{ question: 'How satisfied are you?' }],
            'companyIdentifier': 'exampleCompany',
        }).then(response => {
          expect(response.status).to.eq(200);
        });
      });

    it('should GET a satisfaction survey by ID', () => {
        cy.request('GET', 'http://localhost:3000/satisfaction-survey/0').then(response => {
        expect(response.status).to.eq(200);
        });
    });
});
  