import React from "react";

export default function CommentForm() {
  return (
    <React.Fragment>
      <div className="fs-4">Leave a comment</div>
      <div class="input-group mb-4">
        <span class="input-group-text">Hi username</span>
        <textarea class="form-control" aria-label="With textarea"></textarea>
      </div>
      <button
        class="btn btn-outline-secondary"
        type="button"
        id="inputGroupFileAddon03"
      >
        Submit
      </button>
    </React.Fragment>
  );
}
