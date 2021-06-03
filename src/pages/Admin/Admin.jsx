import React, { useState } from "react";
import Table from "../../components/Table/Table";
import "./index.scss";
export default function Admin() {
  const [activeTab, setActiveTab] = useState(1);

  const handleChangeActiveTab = (tab) => {
    setActiveTab(tab);
  };

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
                      <div className="col fs-2">1.7M</div>
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
                      <div className="col fs-2">1.7M</div>
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
                      <div className="col fs-2">1.7M</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={activeTab === 2 ? "d-block" : "d-none"} id="tab-2">
            <Table />
          </div>
          <div className={activeTab === 3 ? "d-block" : "d-none"} id="tab-3">
            3
          </div>
          <div className={activeTab === 4 ? "d-block" : "d-none"} id="tab-4">
            4
          </div>
        </div>
      </div>
    </div>
  );
}
