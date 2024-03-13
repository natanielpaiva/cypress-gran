// cypress/integration/login.spec.js

describe('Teste de Login', () => {
    it('Deve fazer login com sucesso', () => {
      // Visite a página de login
      cy.visit('https://exemplo-login.vercel.app/');
  
      // Preencha o campo de usuário
      cy.get('input[placeholder="Usuário"]').type('@natanieltech');
  
      // Preencha o campo de senha
      cy.get('input[placeholder="Senha"]').type('mesiga');
  
      // Clique no botão de login
      cy.get('.Login_loginButton__TEYoE').click();
  
      // Verifique se a URL mudou para a página inicial
      cy.url().should('eq', 'https://exemplo-login.vercel.app/home');
  
      // Verifique se o login foi bem-sucedido exibindo uma mensagem na página inicial
      cy.get('p').should('contain', 'Bem-vindo! Você está logado');
    });
  });
  