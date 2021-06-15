import React, { useState, useEffect } from "react";
import CommentList from "../../components/CommentList/CommentList";
import "./index.scss";
import avatar from "../../assets/images/nano.jpg";
import CommentForm from "../../components/CommentForm/CommentForm";
import { useParams } from "react-router";
import { getReviewById, getReviewComments } from "../../lib/api/reviews";
import { getUserById } from "../../lib/api/user";

export default function ReviewDetail() {
  const [review, setReview] = useState(null);
  const [author, setAuthor] = useState(null);
  const [reviewComments, setReviewComments] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const reviewRes = await getReviewById(id);
      const authorRes = await getUserById(reviewRes.userId)
      const reviewCommentsRes = await getReviewComments(id);

      setReview(reviewRes);
      setAuthor(authorRes);
      setReviewComments(reviewCommentsRes);


      // console.log("reviewRes.userId", reviewRes.userId);


      console.log("author", author);

      // console.log("userReviewsRes", userReviewsRes);
      // console.log("userCommentsRes", userCommentsRes);

      // console.log("current user ", auth.currentUser.uid);
      // console.log(" user ", user.uid);
    } catch (err) {
      throw err;
    }
  };

  if( !review || !author || !reviewComments ) return ( <div>loading</div> )
  return (
    <div className="review-container my-3 py-3">
      <div className="rewview-header fs-1">
        {review.title}
      </div>
      <div className="rewview-info d-flex">
        <div className="review-info__left me-4">
          <a href="/user-profile">
            <img src={author.avatar ||avatar} alt="" />
          </a>
        </div>
        <div className="review-info__right d-flex">
          <div className="row flex-column">
            <span className="author-name fs-3 col">{author.username}</span>
            <div className="d-flex col">
              <div className="review-date me-3">{ new Date(review.createdAt.seconds*1000).toLocaleString()} </div>
              <div className="">
                <a href="#comments">{reviewComments.length} comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rewview-body">
        {review.content}
      </div>
      <div className="review-comments-container" id="comments">
       <CommentList />
      </div>
      
      <div className="comment-form">
        <CommentForm />
      </div>
    </div>
  );
}
