import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./index.scss";
export default function CommentList() {
  return (
    <div className="review-comments">
      <div className="fs-3 mb-4 ">05 Comments</div>
      <CommentItem />
      <CommentItem />
      <CommentItem />
    </div>
  );
}
