import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

import "./index.scss";
import nano from "../../assets/images/nano.jpg";
import UserEdit from "../../components/UserEdit/UserEdit";
import ReviewItemList from "../../components/ReviewItemList/ReviewItemList";

import {
  auth,
  getUserById,
  getUserComments,
  getUserReviews,
} from "../../lib/api/user";
import Skeleton from "react-loading-skeleton";

export default function UserProfile() {
  const [user, setUser] = useState(null);
  const [userReviews, setUserReview] = useState(null);
  const [userComments, setUserComments] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userRes = await getUserById(id);
      const userReviewsRes = await getUserReviews(id);
      const userCommentsRes = await getUserComments(id);
      setUser(userRes);
      setUserReview(userReviewsRes);
      setUserComments(userCommentsRes);
      console.log("userRes", userRes);

      console.log("userReviewsRes", userReviewsRes);
      console.log("userCommentsRes", userCommentsRes);

      // console.log("current user ", auth.currentUser.uid);
      // console.log(" user ", user.uid);
    } catch (err) {
      throw err;
    }
  };

  if (!user || !userComments || !userReviews)
    return (
      <div className="py-5">
        <div className="container ">
          <div className="row gx-5">
            <div className="col-5 avatar">
              <div className="avatar-container float-end">
                <Skeleton count="10"/>
              </div>
            </div>
            <div className="col-7 info">
              <div className="row">
                <div className="col-5 fs-2"><Skeleton /></div>
                <div className="col d-flex align-items-center">
                 
                </div>
              </div>
              <div className="row mb-2 ps-3">Email: <Skeleton /></div>

              <div className="row mb-2 ps-3">Phone: <Skeleton /></div>

              <div className="row mb-2 ps-3">Reviews: <Skeleton /></div>

              <div className="row mb-2 ps-3">
                Comments: <Skeleton />
              </div>
            </div>
          </div>

          {/* Review List */}
          <div className="container my-5 overflow-hidden">
            <div className="new-review-list__header fs-1 text-center my-3">
              Reviewed Posts
            </div>

            <div className="review-item-list-container">
            <Skeleton count="20"/>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="py-5">
      <div className="container ">
        <div className="row gx-5">
          <div className="col-5 avatar">
            <div className="avatar-container float-end">
              <img src={user.avatar || nano} alt="" />
            </div>
          </div>
          <div className="col-7 info">
            <div className="row">
              <div className="col-5 fs-2">{user.username}</div>
              <div className="col d-flex align-items-center">
                {auth.currentUser && user.id === auth.currentUser.uid ? (
                  <UserEdit user={user} />
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="row mb-2 ps-3">Email: {user.email}</div>

            <div className="row mb-2 ps-3">Phone: {user.phone}</div>

            <div className="row mb-2 ps-3">Reviews: {userReviews.length}</div>

            <div className="row mb-2 ps-3">Comments: {userComments.length}</div>
          </div>
        </div>

        {/* Review List */}
        <div className="container my-5 overflow-hidden">
          <div className="new-review-list__header fs-1 text-center my-3">
            Reviewed Posts
          </div>

          <div className="review-item-list-container">
            <ReviewItemList items={userReviews} />
          </div>
        </div>
      </div>
    </div>
  );
}
