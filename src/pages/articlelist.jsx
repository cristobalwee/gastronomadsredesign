import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '../components/button.jsx';
import ArticleCard from '../components/articlecard.jsx';

class ArticleList extends Component {
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
       console.log(res.data);
    });
  }

  render() {
    return (
      <div>Hello there</div>
    );
  }
}

export default ArticleList;
