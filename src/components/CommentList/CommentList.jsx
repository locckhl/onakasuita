import React,{useEffect,useParams,useState} from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./index.scss";
import {getReviewComments} from "../../lib/api/reviews.js";
export default function CommentList() {
  const id = 'M5urkL6iKu2KskZ8qENA';
  const [items, setItem] = useState('');
    const fetchData = async (id) => {
    try {
      const query = await getReviewComments(id)

      console.log("data", query);
      setItem(query);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchData(id);
  }, []);

  return (
    <div className="review-comments">
      {items.length > 0 ? (
      
      // <div className="fs-3 mb-4 ">{items.length} Comments</div>
        items.map(item => (
          <CommentItem
            currentItem = {item}
          />
        ))
      ):
      <div className="fs-3 mb-4 ">0 Comments</div>
      }
      
    </div>
  );
}
