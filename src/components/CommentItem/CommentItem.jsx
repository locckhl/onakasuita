import React,{useEffect,useState} from "react";
import thumb from "../../assets/images/nano.jpg";
import "./index.scss";
import {getUserById} from "../../lib/api/user.js";
export default function CommentItem(props) {
  const [user,setUser] = useState('');
  const fetchData = async (id) => {
    try {
      const userProfile = await getUserById(id)
      setUser(userProfile.username);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchData(props.currentItem.userId);
  }, []);

  return (
    <div className="pb-5 d-flex comment-item">
      <div className="thumb me-3">
        <a href="/user-profile">
          <img src={thumb} alt="author-avatar" />
        </a>
      </div>
      <div className="desc">
        <div className="comment-content me-3">
          
        </div>
        <div className="comment-info">
          <div className="d-flex justify-content-between">
            <div>
              <span className="me-3">
                  <a href="/user-profile">{user}</a>
              </span>
              <span>{props.currentItem.content}</span>
            </div>
            <div style={{marginLeft: "30px"}}>
              <button type="button" class="btn btn-danger" onClick={()=>props.deleteComment(props.currentItem.id)}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
