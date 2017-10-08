import React, { Component } from 'react';
import axios from 'axios';

import Button from '../components/button.jsx';
import Pin from '../media/icon_pin.svg';

class Article extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
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
       this.setState({ loading: true });
    });
  }

  searchArticles(url) {
    const articles = this.state.articles;
    for (let i = 0; i < articles.length; i++) {
      if (articles[i].url === url) {
        return articles[i];
      }
    }
  }

  render() {
    const { match } = this.props;
    const found = this.searchArticles(match.params.id);
    if (!found) {
      return <h1>Something went wrong</h1>
    }

    return (
      <div className="article page">
        <div className="article-content">
          <h4 className="inline">{(found.restaurant[6]).date}</h4>
          <span className="inline location">
            <img src={Pin}></img>
            <h4 className="inline">{found.location}</h4>
          </span>
          <h1>{found.title}</h1>
          <div className="image" style={{backgroundImage: "url(" + found.img + ")"}}></div>
          <p>{found.review[0].one}</p>
          <p>{found.review[1].two}</p>
          <p>{found.review[2].three}</p>
          <p>{found.review[3].four}</p>
        </div>
      </div>
    );
  }
}

export default Article;
