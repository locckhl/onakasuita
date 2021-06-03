import React from "react";
import "./index.scss";
import ReviewDetail from "../../components/ReviewDetail/ReviewDetail";
export default function ReviewList() {
  return (
    <div className="container my-5 overflow-hidden">
      <div className="new-review-list__header fs-1 text-center my-3">
        Review list
      </div>

      <div className="new-review-list__options clearfix my-2">
        <div className="float-start">
          <input
            type="text"
            class="form-control"
            placeholder="Review title or author"
            aria-label="serach"
            aria-describedby="addon-wrapping"
          />
        </div>
        <div className="float-end">
            <div className="row">
                <div className="col filter-element asc">Coments</div>
                <div className="col filter-element desc">Dates</div>
            </div>
        </div>
      </div>

      <div className="new-review-list row row-cols-1 gx-5 row-cols-lg-4 justify-content-center ">
        <div className="col py-4">
          <ReviewDetail />
        </div>
        <div className="col py-4">
          <ReviewDetail />
        </div>
        <div className="col py-4">
          <ReviewDetail />
        </div>
        <div className="col py-4">
          <ReviewDetail />
        </div>
        <div className="col py-4">
          <ReviewDetail />
        </div>
      </div>
    </div>
  );
}
