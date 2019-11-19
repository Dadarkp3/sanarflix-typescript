import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Import GlobalStyle
import { Provider } from 'react-redux';
import { GlobalStyle } from '../../assets/styles/GlobalStyle';

// Import Components
import Navbar from '../../components/Navbar';
import Home from '../Home';
import About from '../About';
import store from '../../store';
import Footer from '../../components/Footer';
import Login from '../Login';

const App: React.FC = () => (
  <Provider store={store}>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
    </Switch>
    <Footer />
    <GlobalStyle />
  </Provider>
);

export default App;
