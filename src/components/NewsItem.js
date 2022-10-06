import React from "react";

export default function NewsItem(props) {
  let { title, description, imageUrl, newsurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span
            class="position-absolute top-0 start-10 translate-middle badge rounded-pill bg-danger"
            style={{ left: "90%", zIndex: "1" }}
          >
            {source}
            <span class="visually-hidden">unread messages</span>
          </span>
        </div>

        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title} ...</h5>

          <p className="card-text">{description} ...</p>
          <p class="card-text">
            <small class="text-muted">
              By {author ? author : "unknown"} on {new Date(date).toGMTString()}
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
