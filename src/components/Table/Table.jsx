import React, { useEffect, useState } from "react";
import "./index.scss";
import {
  getAllUser,
  deleteUser,
  blockUser,
  unBlockUser,
} from "../../lib/api/user";
import { getReviews } from "../../lib/api/reviews";
import { getComments } from "../../lib/api/comment";
import parse from "html-react-parser";

export default function Table(props) {
  const [listUser, setListUser] = useState([]);
  const [listReview, setListReview] = useState([]);
  const [listComment, setListComment] = useState([]);

  useEffect(async () => {
    let follow = (await getAllUser()) || [];
    setListUser(follow);
    follow = (await getReviews()) || [];
    setListReview(follow);
    follow = (await getComments()) || [];
    setListComment(follow);
  }, [listUser.length]);

  const changeStatusUser = (id, status) => {
    let index = listUser.findIndex((value) => value.id === id);
    let arr = [];
    arr = arr.concat(listUser);
    if (arr[index].block) {
      arr[index].block = false;
      unBlockUser(id);
    } else {
      arr[index].block = true;
      blockUser(id);
    }
    setListUser(arr);

    // window.location.reload(false);
  };
  let divRender = <div></div>;
  if (props.type == "users") {
    divRender = (
      <div>
        <div className="text-center fs-3 mb-3">
          <span>User Table</span>
        </div>

        {/* table content */}
        <table class="table table-striped table-hover table-bordered admin-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">UserName</th>
              <th scope="col">Phone</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((value, index) => {
              let link = `user-profile/${value.id}`;
              console.log(value);
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={link}>{value.username}</a>
                  </td>
                  <td>{value.phone}</td>
                  <td>
                    {value.email}
                  </td>
                  <td>
                    {value.block ? (
                      <button
                        type="button"
                        class="btn btn-outline-primary"
                        onClick={() => changeStatusUser(value.id, value.block)}
                      >
                        Unblock
                      </button>
                    ) : (
                      <button
                        type="button"
                        class="btn btn-outline-danger"
                        onClick={() => changeStatusUser(value.id, value.block)}
                      >
                        Block
                      </button>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else if (props.type == "review") {
    divRender = (
      <div>
        <div className="text-center fs-3 mb-3">
          <span>Reivew Table</span>
        </div>

        {/* table content */}
        <table class="table table-striped table-hover table-bordered admin-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Reviewer</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {listReview.map((value, index) => {
              let userReview = listUser.find(
                (user) => user.id === value.userId
              );
              let linkUser = `user-profile/${value.id}`;
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    {" "}
                    <a href={`/review-detail/${value.id}`}>
                      {value.title}
                    </a>{" "}
                  </td>
                  <td style={{ maxWidth: "450px" }}>
                    {new DOMParser().parseFromString(value.content, "text/html")
                      .body.innerText.length > 100 ? (
                      <React.Fragment>
                        {new DOMParser()
                          .parseFromString(value.content, "text/html")
                          .body.innerText.substring(0, 100) + " ........."}{" "}
                      </React.Fragment>
                    ) : (
                      value.content
                    )}
                  </td>
                  <td>
                    <a href={linkUser}>{userReview && userReview.username}</a>
                  </td>
                  <td></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  } else if (props.type == "comment") {
    divRender = (
      <div>
        <div className="text-center fs-3 mb-3">
          <span>Comment Table</span>
        </div>

        {/* table content */}
        <table class="table table-striped table-hover table-bordered admin-table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Review Title</th>
              <th scope="col">Content</th>
              <th scope="col">User</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {listComment.map((value, index) => {
              let linkUser = `user-profile/${value.id}`;
              let linkReview = `review-detail/${value.reviewId}`;
              let userReview = listUser.find(
                (user) => user.id === value.userId
              );
              let reviewTitle = listReview.find(
                (review1) => review1.id === value.reviewId
              );
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>
                    <a href={linkReview}>{reviewTitle && reviewTitle.title}</a>
                  </td>
                  <td>{value.content}</td>
                  <td>
                    <a href={linkUser}>{userReview && userReview.username}</a>
                  </td>
                  <td>
                    <a class="text-center"></a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  console.log(listReview);
  return divRender;
}
