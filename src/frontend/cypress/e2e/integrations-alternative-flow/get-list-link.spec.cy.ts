describe('Consulta GET no endpoint', () => {
    it('Deve consultar o endpoint', () => {
      cy.request('GET', 'http://localhost:3001/link-lists/upload')
        .then((response) => {
          expect(response.status).to.eq(200); // Verifica se o status da resposta é 200 OK
          // Aqui você pode adicionar asserções adicionais para verificar o corpo da resposta, se necessário
        });
    });
  });