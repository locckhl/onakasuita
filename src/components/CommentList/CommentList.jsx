import React,{useEffect,useParams,useState} from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./index.scss";
import {getReviewComments} from "../../lib/api/reviews.js";
import {deleteComment} from "../../lib/api/comment";
export default function CommentList(props) {
  const id = props.id;
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
  }, [props.addComment]);

  const onDelete =async (id1)=>{
    let status= await deleteComment(id1);
    if (status){
      fetchData(id);
    }
  }
  console.log(items);
  return (
    <div className="review-comments">
      {items.length > 0 ? (
      
      // <div className="fs-3 mb-4 ">{items.length} Comments</div>
        items.map(item => (
          <CommentItem
            currentItem = {item} 
            deleteComment={onDelete}
          />
        ))
      ):
      <div className="fs-3 mb-4 ">0 Comments</div>
      }
      
    </div>
  );
}
