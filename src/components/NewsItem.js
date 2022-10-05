import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsurl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span
            class="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title} ...</h5>

            <p className="card-text">{description} ...</p>
            <p class="card-text">
              <small class="text-muted">
                By {author ? author : "unknown"} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a href={newsurl} className="btn btn-primary btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}
