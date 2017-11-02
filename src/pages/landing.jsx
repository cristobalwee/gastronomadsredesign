import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../components/button.jsx';
import ArticleCard from '../components/articlecard.jsx';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.loadArticles();
  }

  loadArticles() {
    axios.get("http://localhost:3001/api/articles")
     .then(res => {
       this.setState({ articles: res.data });
    });
  }

  reload() {
    window.location.reload();
  }

  render() {
    let notFeatured = this.state.articles.reverse();
    if (notFeatured) {
      notFeatured.splice(1, 1);
      if (notFeatured.length >= 4) {
        notFeatured = notFeatured.slice(0, 4);
      }
    }

    let List;
    if (!notFeatured || !notFeatured.length) {
      List = (
        <div className="error">
          <h1>Oh dear, it appears something's gone wrong. &#129300;</h1>
          <Button onClick={this.reload.bind(this)} type="dark" copy="Refresh page"/>
        </div>
      );
    } else {
      List = <div className="article-list">{notFeatured.map((article, i) => (
        <ArticleCard
          key={i}
          url={article.url}
          title={article.title}
          description={article.description}
          img={article.img}
          location={article.location}
          rating={(article.restaurant[0]).gastro_rating}
          date={(article.restaurant[6]).date} />
      ))}</div>
    }

    return (
      <div id="landing" className="page">
        <div className="hero">
          <div className="overlay-wrapper">
            <div className="overlay"></div>
          </div>
          <div className="title">
            <h1>Primos</h1>
            <p>Perhaps if it weren’t the best, if it was just another chicken,
              the flame would have died long ago. The space remains, to this
              day, almost the same: giant, fun, and unpretentious. Out of all
              the restaurants that have inhabited Lima’s magic corner, Primos
              has done it best by a wide margin.</p>
            <Link to="/articles/primos"><Button type="light" copy="Read more" /></Link>
          </div>
        </div>
        {List}
      </div>
    );
  }
}

export default Landing;
