import React from "react";
import thumb from "../../assets/images/nano.jpg";
import "./index.scss";

export default function CommentItem() {
  return (
    <div className="pb-5 d-flex comment-item">
      <div className="thumb me-3">
        <a href="/user-profile">
          <img src={thumb} alt="author-avatar" />
        </a>
      </div>
      <div className="desc">
        <div className="comment-content me-3">
          Multiply sea night grass fourth day sea lesser rule open subdue female
          fill which them Blessed, give fill lesser bearing multiply sea night
          grass fourth day sea lesser
        </div>
        <div className="comment-info">
          <div className="d-flex">
            <span className="me-3">
                <a href="/user-profile">Nanno</a>
            </span>
            <span>December 4, 2017 at 3:12 pm</span>
          </div>
        </div>
      </div>
    </div>
  );
}
