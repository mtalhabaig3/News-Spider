import { getByTitle } from "@testing-library/react";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [];
  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84ac237cd6264700af1e0d7e4d7205f4&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84ac237cd6264700af1e0d7e4d7205f4&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: this.state.page - 1 });
  };

  handleNext = async () => {
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84ac237cd6264700af1e0d7e4d7205f4&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
      });
    }
  };
  render() {
    return (
      <div className="container my-3">
        <h1> This is New Spider's top headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={
                    element.urlToImage
                      ? element.urlToImage
                      : "https://media.cnn.com/api/v1/images/stellar/prod/221004080609-nyse-100322.jpg?c=16x9&q=w_800,c_fill"
                  }
                  newsurl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button type="button" class="btn btn-dark" onClick={this.handlePrev}>
            &larr; Previous
          </button>
          <button type="button" class="btn btn-dark" onClick={this.handleNext}>
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}