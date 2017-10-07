import React, { Component } from 'react';
import axios from 'axios';

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
    const loader = document.getElementsByClassName("loader")[0];
    const progress = document.getElementsByClassName("progress-bar-inner")[0];
    progress.style.animation = "progress 1.75s ease-in-out infinite both";
    loader.style.left = "0";
  }

  loadArticles() {
    axios.get("http://localhost:3001/api/articles")
     .then(res => {
       this.setState({ articles: res.data });
       console.log(res.data);
    });
  }

  render() {
    const articles = this.state.articles;
    let query = (this.props.location.search).split('=')[1];
    let splitted = false;
    if (query) {
      if (query.indexOf('%20') !== -1) {
        query = query.split('%20');
        splitted = true;
        for (let i = 0; i < query.length; i++) {
          query[i] = query[i].toLowerCase();
        }
      }
      else {
        query = query.toLowerCase();
      }
    }
    let trueArticles = articles;
    let indices = []
    if (this.props.location.search) {
      for (let i = 0; i < articles.length; i++) {
        if (splitted) {
          for (let j = 0; j < query.length; j++) {
            if ((articles[i].title.toLowerCase()).indexOf(query[j]) !== -1) {
              if(indices.indexOf(i) === -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[0].one.toLowerCase()).indexOf(query[j]) !== -1) {
              if(indices.indexOf(i) === -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[1].two.toLowerCase()).indexOf(query[j]) !== -1) {
              if(indices.indexOf(i) === -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[2].three.toLowerCase()).indexOf(query[j]) !== -1) {
              if(indices.indexOf(i) === -1) {
                indices.push(i);
              }
            }
            if ((articles[i].review[3].four.toLowerCase()).indexOf(query[j]) !== -1) {
              if(indices.indexOf(i) === -1) {
                indices.push(i);
              }
            }
          }
        }
        else {
          if ((articles[i].title.toLowerCase()).indexOf(query) !== -1) {
            if(indices.indexOf(i) === -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[0].one.toLowerCase()).indexOf(query) !== -1) {
            if(indices.indexOf(i) === -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[1].two.toLowerCase()).indexOf(query) !== -1) {
            if(indices.indexOf(i) === -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[2].three.toLowerCase()).indexOf(query) !== -1) {
            if(indices.indexOf(i) === -1) {
              indices.push(i);
            }
          }
          if ((articles[i].review[3].four.toLowerCase()).indexOf(query) !== -1) {
            if(indices.indexOf(i) === -1) {
              indices.push(i);
            }
          }
        }
      }
      trueArticles = [];
      for (let i = 0; i < indices.length; i++) {
        trueArticles.push(articles[indices[i]]);
      }
    }

    return (
      <div>Results for {query}</div>
    );
  }
}

export default ArticleList;
