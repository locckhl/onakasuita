import React from "react";
import "./index.scss";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import ReviewItemList from "../../components/ReviewItemList/ReviewItemList";
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

      <div className="review-item-list-container">
          <ReviewItemList />
        </div>
    </div>
  );
}
