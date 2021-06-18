import React, { useRef, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { auth, uploadImage } from "../../lib/api/user";
import MyCustomUploadAdapterPlugin from "../../lib/custom/MyUploadAdapter";
import { updateReview } from "../../lib/api/reviews";

export default function ReviewEdit({ review }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(review.title);
  const [content, setContent] = useState(review.content);
  const thumbnailInput = useRef();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = async () => {
    try {
      if (title === null || title === undefined) {
        throw new Error("Please input title");
      }
      if (content === null || content === undefined) {
        throw new Error("Please input content ");
      }
      let thumbnail = null;
      console.log("thumbnailInput", thumbnailInput.current.files[0]);
      if (
        thumbnailInput.current.files[0]
      ) {
        thumbnail = await uploadImage(thumbnailInput.current.files[0]);
      }
      console.log("thumbnail", thumbnail);
      const res = await updateReview({
        id: review.id,
        title,
        content,
        thumbnail,
      });
      alert("Successfully updated your review");
      window.location.reload();
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Edit Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
              value={title}
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
            />
            <label class="input-group-text" for="inputGroupFile02">
              Upload thumbnail
            </label>
          </div>

          <CKEditor
            editor={ClassicEditor}
            data={content}
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
