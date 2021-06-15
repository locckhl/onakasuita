import React, { useState, useEffect } from "react";
import "./index.scss"
import sushi from "../../assets/images/sushi.jpg"
import { getReviewComments } from "../../lib/api/reviews";

export default function ReviewDetail({item}) {
  const [reviewComments, setReviewComments] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const reviewCommentsRes = await getReviewComments(item.id);
      setReviewComments(reviewCommentsRes);
      // console.log("reviewCommentsRes", reviewCommentsRes);
    } catch (err) {
      throw err;
    }
  };

  if(!reviewComments ) return ( <div>loading</div> )
    return (
        <div className="review-detail">
            <div className="review-detail-img">
                <a className="review-detail-img__container" href={`/review-detail/${item.id}`}>
                    <img src={item.thumbnail || sushi} alt="sushi" />
                </a>
            </div>
            <div className="review-detail-text">
                <div className="review-detail-text__header fs-4">{item.title}</div>
            <div className="review-detail-text__body">{item.content.length > 100 ? <React.Fragment>{item.content.substring(0, 100) + " ........."} <a href={`/review-detail/${item.id}`}>More</a></React.Fragment>  : item.content} </div>
                <div className="review-detail-text__comment">{reviewComments.length} comments</div>
                <div className="review-detail-text__time text-center">{ new Date(item.createdAt.seconds*1000).toLocaleString()}</div>
            </div>
        </div>
    )
}
