import React, { useRef, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { createReview } from "../../lib/api/reviews";
// import db, { firebase } from "./firebase";
import "./index.scss";
import { auth, uploadImage } from "../../lib/api/user";
import MyCustomUploadAdapterPlugin from "../../lib/custom/MyUploadAdapter";
export default function NewReview() {
  const [userId, setUserId] = useState(null);
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState(null);
  const thumbnailInput = useRef();

  const handleSubmit = async () => {
    try {
      if (title === null || title === undefined) {
        throw new Error("タイトルを入力してください");
      }
      if (content === null || content === undefined) {
        throw new Error("内容を入力してください");
      }
      if (thumbnailInput.current.files[0] === null || thumbnailInput.current.files[0] === undefined) {
        throw new Error("イメージをアップロードしてください");
      }
      const thumbnail = await uploadImage(thumbnailInput.current.files[0]);

      await createReview({
        title,
        content,
        userId: auth.currentUser.uid,
        thumbnail,
      });
      alert("投稿完了");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="review py-5">
      <div className="fs-2">Create new review</div>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">
          名
        </span>
        <input
          type="text"
          class="form-control"
          placeholder="Review Title"
          aria-label="title"
          aria-describedby="basic-addon1"
          required
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div class="input-group mb-3">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile02"
          ref={thumbnailInput}
          required
        />
        <label class="input-group-text" for="inputGroupFile02">
          Upload thumbnail
        </label>
      </div>

      <CKEditor
        editor={ClassicEditor}
        data="<p>Write your review here</p>"
        config={{ extraPlugins: [MyCustomUploadAdapterPlugin] }}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          // console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />

      <button
        className="btn btn-primary mt-4"
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        Confirm
      </button>
    </div>
  );
}
