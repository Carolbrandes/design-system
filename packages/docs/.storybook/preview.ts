import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      // Configuração padrão
      current: 'dark', // tema inicial
      darkClass: 'dark', // classe CSS para dark mode
      lightClass: 'light', // classe CSS para light mode
      stylePreview: true, // aplica estilos ao iframe de preview
      dark: {
        ...themes.dark, // tema escuro padrão do Storybook
        appBg: '#121214', // cor de fundo personalizada
        appContentBg: '#202024', // cor do conteúdo
        barBg: '#323238', // cor da barra superior
      },
      light: {
        ...themes.normal, // tema claro padrão do Storybook
        appBg: '#f8f8f8',
        appContentBg: '#ffffff',
      },
    },
    docs: {
      theme: themes.dark, // tema escuro para documentação
    },
  },
  tags: ['autodocs'],
};

export default preview;