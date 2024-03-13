const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    // Outras opções de configuração do e2e...
  },
  // Configurações para testes de componentes...
});
