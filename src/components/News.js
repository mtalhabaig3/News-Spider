import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  //   static defaultProps = {
  //     country: "in",
  //     pageSize: 8,
  //     category: "general",
  //   };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  articles = [];

  async updateNews(pageNo) {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=84ac237cd6264700af1e0d7e4d7205f4&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }
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
    this.updateNews();
  }

  handlePrev = async () => {
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNext = async () => {
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: 30 }}>
          {" "}
          This is New Spider's top headlines
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/PBCZVW3Z4E4KR3JYWDY7ZNKC2M.JPG&w=1440"
                    }
                    newsurl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handlePrev}
            disabled={this.state.page === 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={this.handleNext}
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
