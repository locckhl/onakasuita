import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./index.scss";
export default function NewReview() {
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
        />
      </div>

      <div class="input-group mb-3">
        <input type="file" class="form-control" id="inputGroupFile02" />
        <label class="input-group-text" for="inputGroupFile02">
          Upload image
        </label>
      </div>

      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />

      <button className="btn btn-primary mt-4">Confirm</button>
    </div>
  );
}
