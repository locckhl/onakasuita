import React from "react";
import { auth, getUserById } from "../../lib/api/user";
import { useEffect, useState } from "react";


export default function CommentForm(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [content,setContent] = useState("")
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await getUserById(auth.currentUser.uid);
      }
      setCurrentUser(newUser);
    });
  }, []); 
  const onSubmit = async() =>{
    // { content, createdAt, userId, reviewId }
    let createdAt =new Date(Date.now()).toLocaleString();
    console.log(content,createdAt,auth.currentUser.uid,props.id);
    await props.onSubmitComment({content:content,createdAt:createdAt,userId:auth.currentUser.uid,reviewId:props.id})
    await setContent(" ")
  } 
  const onChangeContent = (e)=>{
    setContent(e.target.value)
  }
  return (
    <React.Fragment >
      <div className="fs-4">Leave a comment</div>
      <div class="input-group mb-4">
        <span class="input-group-text">{ currentUser && currentUser.username}</span>
        <textarea class="form-control" aria-label="With textarea" value={content} onChange={onChangeContent} ></textarea>
      </div>
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="inputGroupFileAddon03"
        onClick={onSubmit}
      >
        Submit
      </button>
    </React.Fragment>
  );
}
