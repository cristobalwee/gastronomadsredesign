import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../components/button.jsx';
import ArticleCard from '../components/articlecard.jsx';

class Article extends Component {
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
    console.log(found);

    return (
      <div>
        <h4>{(found.restaurant[6]).date}&nbsp;&nbsp;&nbsp;
          <span className="inline location"><img src="/media/icon_pin.svg"></img>
          <h4 className="inline">{found.location}</h4></span>
        </h4>
        <h1>{found.title}</h1>
        <img src={found.img}></img>
        <p>{found.review[0].one}</p>
        <p>{found.review[1].two}</p>
        <p>{found.review[2].three}</p>
        <p>{found.review[3].four}</p>
      </div>
    );
  }
}

export default Article;
