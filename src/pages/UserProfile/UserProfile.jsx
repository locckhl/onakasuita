import React from "react";
import "./index.scss";
import nano from "../../assets/images/nano.jpg";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import UserEdit from "../../components/UserEdit/UserEdit";
import ReviewItemList from "../../components/ReviewItemList/ReviewItemList";

export default function UserProfile() {
  return (
    <div className="py-5">
      <div className="container ">
        <div className="row gx-5">
          <div className="col-5 avatar">
            <div className="avatar-container float-end">
              <img src={nano} alt="" />
            </div>
          </div>
          <div className="col-7 info">
            <div className="row">
              <div className="col-3 fs-2">Username</div>
              <div className="col d-flex align-items-center">
                <UserEdit />
              </div>
            </div>

            <div className="row mb-2">Email: 123@gmail.com</div>

            <div className="row mb-2">Phone: 123456</div>

            <div className="row mb-2">Reviews: 10</div>

            <div className="row mb-2">Comments: 35</div>
          </div>
        </div>

        {/* Review List */}
        <div className="container my-5 overflow-hidden">
          <div className="new-review-list__header fs-1 text-center my-3">
            Reviewed Posts
          </div>

          <div className="review-item-list-container">
            <ReviewItemList/>
          </div>
        </div>
      </div>
    </div>
  );
}
