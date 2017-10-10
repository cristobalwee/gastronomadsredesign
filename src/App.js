import React, { Component } from 'react';
import './index.scss';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Landing from './pages/landing.jsx';
import About from './pages/about.jsx';
import Navigation from './components/navigation.jsx';
import Footer from './components/footer.jsx';
import Article from './pages/article.jsx';
import ArticleList from './pages/articlelist.jsx';
import Loader from './components/loader.jsx';

//https://www.fullstackreact.com/articles/deploying-a-react-app-to-s3/
//https://hackernoon.com/animated-page-transitions-with-react-router-4-reacttransitiongroup-and-animated-1ca17bd97a1a
//https://github.com/ReactTraining/react-router/issues/4407
//http://www.newworlder.com/

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route exact path="/" component={ Landing }/>
          <Route path="/about" component={ About }/>
          <Route path="/articles/:id" component={ Article }/>
          <Route exact path="/articles" component={ ArticleList }/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
