import React from 'react'
import "./index.scss"
import sushi from "../../assets/images/sushi.jpg"

export default function ReviewDetail() {
    return (
        <div className="review-detail">
            <div className="review-detail-img">
                <a className="review-detail-img__container" href="/review-detail">
                    <img src={sushi} alt="sushi" />
                </a>
            </div>
            <div className="review-detail-text">
                <div className="review-detail-text__header fs-4">Sushi</div>
                <div className="review-detail-text__body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua <a href="/review-detail">More</a></div>
                <div className="review-detail-text__comment">5 comments</div>
                <div className="review-detail-text__time text-center">May 7, 2021</div>
            </div>
        </div>
    )
}
