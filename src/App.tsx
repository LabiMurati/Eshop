import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

//Components
import { Footer } from './components/Footer/Footer';
// import { Header } from './components/Header/Header';

//Pages
import { Home } from './pages/Home/Home';

import { ErrorPage } from './pages/ErrorPage/ErrorPage';

//Styles
import './App.scss';
import { Singlepage } from './pages/Singlepage/Singlepage';
import { ProductFilters } from './pages/ProductFilters/ProductFilters'



function App() {
  return (
    <div className="App">
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  exact path="/Singlepage" component={Singlepage} />
          <Route exact path="/ProductFilters" component={ProductFilters} />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
