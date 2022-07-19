import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './components/Wraper/Root';
import { GlobalStyles } from './assets/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './assets/theme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Root />
     </ThemeProvider>
);


