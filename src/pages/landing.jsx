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
    this.loadArticles();
  }

  loadArticles() {
    axios.get("http://localhost:3001/api/articles")
     .then(res => {
       this.setState({ articles: res.data });
    });
  }

  render() {
    let notFeatured = this.state.articles.reverse();
    if (notFeatured) {
      notFeatured.splice(1, 1);
      if (notFeatured.length >= 8) {
        notFeatured = notFeatured.slice(0, 8);
      }
    }

    let List;
    if (!notFeatured || !notFeatured.length) {
      List = (
        <h1 className="error">Oh dear, it appears something's gone wrong. &#129300;</h1>
      );
    } else {
      List = notFeatured.map((article, i) => (
        <ArticleCard
          key={i}
          url={article.url}
          title={article.title}
          description={article.description}
          img={article.img}
          location={article.location}
          rating={(article.restaurant[0]).gastro_rating}
          date={(article.restaurant[6]).date} />
      ));
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
            <Link to="/primos"><Button type="light" /></Link>
          </div>
        </div>
        <div className="article-list">
          {List}
          {/*<ArticleCard
            date="May 2, 2017"
            description="There’s a reason why it works; why Nikkei cuisine has established itself with such prominence in the country and why, time and time again, we’re able to find places like Tzuru just blocks away from ou…"
            img="https://res.cloudinary.com/gastronomads/image/upload/v1493700828/TzuruFEATURED_jmu3lv.jpg"
            location="Lima, Peru"
            rating={4}
            title="Tzuru"
            url="tzuru" />
          <ArticleCard
            date="May 2, 2017"
            description="There’s a reason why it works; why Nikkei cuisine has established itself with such prominence in the country and why, time and time again, we’re able to find places like Tzuru just blocks away from ou…"
            img="https://res.cloudinary.com/gastronomads/image/upload/v1493700828/TzuruFEATURED_jmu3lv.jpg"
            location="Lima, Peru"
            rating={4}
            title="Tzuru"
            url="tzuru" />*/}
        </div>
      </div>
    );
  }
}

export default Landing;
