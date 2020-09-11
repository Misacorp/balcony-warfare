import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';
import * as routes from './constants/routes';

import Main from './components/Main';

const App = function AppContent() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />

        <Router>
          <Switch>
            <Route path={routes.ROOT} component={Main} />
          </Switch>
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
