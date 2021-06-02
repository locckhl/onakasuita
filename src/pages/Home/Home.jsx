import React from "react";
import "./index.scss";
import bg1 from "../../assets/images/bg-1.jpg";
import bg2 from "../../assets/images/bg-2.jpg";
import bg3 from "../../assets/images/bg-3.jpg";
import ReviewDetail from "../../components/ReviewDetail/ReviewDetail";

export default function Home() {
  return (
    <home>

      {/* Carousel */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item  active">
            <div className="img-container">
              <img src={bg1} className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="carousel-item ">
            <div className="img-container">
              <img src={bg2} className="d-block w-100" alt="..." />
            </div>
          </div>
          <div className="carousel-item ">
            <div className="img-container">
              <img src={bg3} className="d-block w-100" alt="..." />
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>


      {/* New review */}
      <div className="container my-5 overflow-hidden">

        <div className="new-review-list__header fs-1 text-center my-3">
          New reivew
        </div>

        <div className="new-review-list row row-cols-1 gx-5 row-cols-lg-4">
          <div className="col">
            <ReviewDetail />
          </div>
          <div className="col">
            <ReviewDetail />
          </div>
          <div className="col">
            <ReviewDetail />
          </div>
          <div className="col">
            <ReviewDetail />
          </div>
        </div>
      </div>
    </home>
  );
}
