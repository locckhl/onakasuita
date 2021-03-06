import React, { useEffect, useState } from "react";
import "./index.scss";
import bg1 from "../../assets/images/bg-1.jpg";
import bg2 from "../../assets/images/bg-2.jpg";
import bg3 from "../../assets/images/bg-3.jpg";
import ReviewItem from "../../components/ReviewItem/ReviewItem";
import ReviewItemList from "../../components/ReviewItemList/ReviewItemList";
import { getReviews } from "../../lib/api/reviews";

export default function Home() {
  const [reviews, setReviews] = useState([])

  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () =>{
    const res = await getReviews()
    setReviews(res)
  };

  const first7Reviews = reviews.filter((item, index) => (
    index <=6 
  ))

  const sortByTime = first7Reviews.sort((a, b) => {
      return new Date(b.createdAt.seconds) - new Date(a.createdAt.seconds);
  });

  if(!reviews) return ( <div>loading</div> )

  return (
    <home className="my-5">
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
          New review
        </div>

        <div className="review-item-list-container">
          <ReviewItemList items={sortByTime} />
        </div>
      </div>
    </home>
  );
}
