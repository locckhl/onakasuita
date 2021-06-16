import React, { useState, useEffect } from "react";
import CommentList from "../../components/CommentList/CommentList";
import "./index.scss";
import avatar from "../../assets/images/nano.jpg";
import CommentForm from "../../components/CommentForm/CommentForm";
import { useParams } from "react-router";
import { getReviewById, getReviewComments } from "../../lib/api/reviews";
import { getUserById } from "../../lib/api/user";
import { createComment } from "../../lib/api/comment";
import parse from "html-react-parser";
import Skeleton from "react-loading-skeleton";

export default function ReviewDetail({ handleShow }) {
  const [review, setReview] = useState(null);
  const [author, setAuthor] = useState(null);
  const [addComment, setAddComment] = useState(0);
  const [reviewComments, setReviewComments] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const onSubmitComment = async (data) => {
    let status = await createComment(data);
    if (status) {
      setAddComment(addComment + 1);
    }
    console.log(status);
  };

  const fetchData = async () => {
    try {
      const reviewRes = await getReviewById(id);
      const authorRes = await getUserById(reviewRes.userId);
      const reviewCommentsRes = await getReviewComments(id);

      setReview(reviewRes);
      setAuthor(authorRes);
      setReviewComments(reviewCommentsRes);
      // console.log("author", author);
    } catch (err) {
      throw err;
    }
  };

  if (!review || !author || !reviewComments)
    return (
      <div className="review-container my-3 py-3">
        <div className="rewview-header fs-1"><Skeleton count="3" /></div>
        <div className="rewview-info d-flex">
          <div className="review-info__left me-4">
            <a href="/user-profile">
              <Skeleton count="5" />
            </a>
          </div>
          <div className="review-info__right d-flex">
            <div className="row flex-column">
              <span className="author-name fs-3 col"><Skeleton /></span>
              <div className="d-flex col">
                <div className="review-date me-3">
                <Skeleton />
                </div>
                <div className="">
                  <a href="#comments"><Skeleton /> comments</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rewview-body">
          {/* {true ? new DOMParser().parseFromString(review.content, 'text/html').body : ''} */}
          <Skeleton height="10"/>
        </div>
        <div className="review-comments-container" id="comments">
        <Skeleton height="10"/>
        </div>

        <div className="comment-form">
        <Skeleton height="10"/>
        </div>
      </div>
    );
  return (
    <div className="review-container my-3 py-3">
      <div className="rewview-header fs-1">{review.title}</div>
      <div className="rewview-info d-flex">
        <div className="review-info__left me-4">
          <a href="/user-profile">
            <img src={author.avatar || avatar} alt="" />
          </a>
        </div>
        <div className="review-info__right d-flex">
          <div className="row flex-column">
            <span className="author-name fs-3 col">{author.username}</span>
            <div className="d-flex col">
              <div className="review-date me-3">
                {new Date(review.createdAt.seconds * 1000).toLocaleString()}{" "}
              </div>
              <div className="">
                <a href="#comments">{reviewComments.length} comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rewview-body">
        {/* {true ? new DOMParser().parseFromString(review.content, 'text/html').body : ''} */}
        {parse(review.content)}
      </div>
      <div className="review-comments-container" id="comments">
        <CommentList id={id} addComment={addComment} />
      </div>

      <div className="comment-form">
        <CommentForm
          review={review}
          id={id}
          onSubmitComment={onSubmitComment}
          handleShow={handleShow}
        />
      </div>
    </div>
  );
}
