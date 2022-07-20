import React, { useState, useEffect } from "react";
import Table from "../../components/Table/Table";
import CommentList from "../../components/CommentList/CommentList";
import "./index.scss";
import { auth, getAllUser, getUserById } from "../../lib/api/user";
import { getReviews } from "../../lib/api/reviews";
import { getComments } from "../../lib/api/comment";
import NF404 from "../../components/NF404/NF404";
import Skeleton from "react-loading-skeleton";
import { Helmet } from "react-helmet";

export default function Admin() {
  const [activeTab, setActiveTab] = useState(1);
  const [listUser, setListUser] = useState([]);
  const [listReview, setListReview] = useState([]);
  const [listComment, setListComment] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await getUserById(auth.currentUser.uid);
      }
      setCurrentUser(newUser);
    });
  }, []);

  useEffect(async () => {
    let follow = (await getAllUser()) || [];
    setListUser(follow);
    follow = (await getReviews()) || [];
    setListReview(follow);
    follow = (await getComments()) || [];
    setListComment(follow);
  }, [listUser.length]);
  const handleChangeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  if (!currentUser)
    return (
      <div className="container-fluid my-5">
        <Helmet>
          <title>Admin</title>
        </Helmet>
        <div className="row">
          <div className="col-2 admin-navbar">
            <nav className={"navabar-list d-flex flex-column "}>
              <a
                className={
                  activeTab === 1
                    ? "navbar-item d-flex active"
                    : "navbar-item d-flex"
                }
              >
                {" "}
                <i class="fas fa-columns"></i> DashBoard{" "}
                <i class="fas fa-caret-down"></i>
              </a>
              <a
                className={
                  activeTab === 2
                    ? "navbar-item d-flex active"
                    : "navbar-item d-flex"
                }
              >
                <i class="fas fa-users"></i>
                Users
                <i class="fas fa-caret-down"></i>
              </a>
              <a
                className={
                  activeTab === 3
                    ? "navbar-item d-flex active"
                    : "navbar-item d-flex"
                }
              >
                <i class="far fa-clipboard"></i>
                Reviews
                <i class="fas fa-caret-down"></i>
              </a>
              <a
                className={
                  activeTab === 4
                    ? "navbar-item d-flex active"
                    : "navbar-item d-flex"
                }
              >
                <i class="far fa-comment"></i>
                Comments
                <i class="fas fa-caret-down"></i>
              </a>
            </nav>
          </div>

          <div className="col-10 admin-content px-5">
            <div className={activeTab === 1 ? "d-block" : "d-none"} id="tab-1">
              <div className="dashboard">
                <div className="dashboard-header text-center fs-3">
                  Dash Board
                </div>
                <div className="dashboard-body gy-1 my-4 row">
                  {/* Users */}
                  <div className="col-4 dashboard-item d-flex ">
                    <div className=" dashboard-item__image text-center me-4">
                      <i class="fas fa-users fs-2"></i>
                    </div>

                    <div className=" dashboard-item__content ">
                      <div className="row flex-column">
                        <div className="col ">User</div>
                        <div className="col fs-2">
                          <Skeleton />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Reviews */}
                  <div className="col-4 dashboard-item d-flex ">
                    <div className=" dashboard-item__image text-center me-4">
                      <i class="far fa-clipboard fs-2"></i>
                    </div>

                    <div className=" dashboard-item__content ">
                      <div className="row flex-column">
                        <div className="col ">Reviews</div>
                        <div className="col fs-2">
                          <Skeleton />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Comments */}
                  <div className="col-4 dashboard-item d-flex ">
                    <div className=" dashboard-item__image text-center me-4">
                      <i class="far fa-comment fs-2"></i>
                    </div>

                    <div className=" dashboard-item__content ">
                      <div className="row flex-column">
                        <div className="col ">Comments</div>
                        <div className="col fs-2">
                          <Skeleton />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  if (currentUser && !currentUser.admin) return <NF404 />;

  return (
    <div className="container-fluid my-5">
      <div className="row">
        <div className="col-2 admin-navbar">
          <nav className={"navabar-list d-flex flex-column "}>
            <a
              href="#tab-1"
              onClick={(e) => {
                e.preventDefault();
                console.log(e.target);
                setActiveTab(1);
              }}
              className={
                activeTab === 1
                  ? "navbar-item d-flex active"
                  : "navbar-item d-flex"
              }
            >
              {" "}
              <i class="fas fa-columns"></i> DashBoard{" "}
              <i class="fas fa-caret-down"></i>
            </a>
            <a
              href="#tab-2"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(2);
              }}
              className={
                activeTab === 2
                  ? "navbar-item d-flex active"
                  : "navbar-item d-flex"
              }
            >
              <i class="fas fa-users"></i>
              Users
              <i class="fas fa-caret-down"></i>
            </a>
            <a
              href="#tab-3"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(3);
              }}
              className={
                activeTab === 3
                  ? "navbar-item d-flex active"
                  : "navbar-item d-flex"
              }
            >
              <i class="far fa-clipboard"></i>
              Reviews
              <i class="fas fa-caret-down"></i>
            </a>
            <a
              href="#tab-4"
              onClick={(e) => {
                e.preventDefault();
                setActiveTab(4);
              }}
              className={
                activeTab === 4
                  ? "navbar-item d-flex active"
                  : "navbar-item d-flex"
              }
            >
              <i class="far fa-comment"></i>
              Comments
              <i class="fas fa-caret-down"></i>
            </a>
          </nav>
        </div>

        {/* content */}
        <div className="col-10 admin-content px-5">
          <div className={activeTab === 1 ? "d-block" : "d-none"} id="tab-1">
            <div className="dashboard">
              <div className="dashboard-header text-center fs-3">
                Dash Board
              </div>
              <div className="dashboard-body gy-1 my-4 row">
                {/* Users */}
                <div
                  className="col-4 dashboard-item d-flex "
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(2);
                  }}
                >
                  <div className=" dashboard-item__image text-center me-4">
                    <i class="fas fa-users fs-2"></i>
                  </div>

                  <div className=" dashboard-item__content ">
                    <div className="row flex-column">
                      <div className="col ">User</div>
                      <div className="col fs-2">{listUser.length}</div>
                    </div>
                  </div>
                </div>

                {/* Reviews */}
                <div
                  className="col-4 dashboard-item d-flex "
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(3);
                  }}
                >
                  <div className=" dashboard-item__image text-center me-4">
                    <i class="far fa-clipboard fs-2"></i>
                  </div>

                  <div className=" dashboard-item__content ">
                    <div className="row flex-column">
                      <div className="col ">Reviews</div>
                      <div className="col fs-2">{listReview.length}</div>
                    </div>
                  </div>
                </div>

                {/* Comments */}
                <div
                  className="col-4 dashboard-item d-flex "
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveTab(4);
                  }}
                >
                  <div className=" dashboard-item__image text-center me-4">
                    <i class="far fa-comment fs-2"></i>
                  </div>

                  <div className=" dashboard-item__content ">
                    <div className="row flex-column">
                      <div className="col ">Comments</div>
                      <div className="col fs-2">{listComment.length}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={activeTab === 2 ? "d-block" : "d-none"} id="tab-2">
            <Table type="users" />
          </div>
          <div className={activeTab === 3 ? "d-block" : "d-none"} id="tab-3">
            <Table type="review" />
          </div>
          <div className={activeTab === 4 ? "d-block" : "d-none"} id="tab-4">
            <Table type="comment" />
          </div>
        </div>
      </div>
    </div>
  );
}
