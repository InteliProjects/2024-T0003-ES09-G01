describe('Email Endpoint', () => {
  it('should send emails to users', () => {
    cy.request('GET', 'http://localhost:3000/email/send-emails').then(response => {
      expect(response.status).to.eq(200);
    });
  });
});
  