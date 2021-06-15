import React from 'react'
import "./index.scss"
import sushi from "../../assets/images/sushi.jpg"

export default function ReviewDetail({item}) {
    return (
        <div className="review-detail">
            <div className="review-detail-img">
                <a className="review-detail-img__container" href={`/review-detail/${item.id}`}>
                    <img src={item.thumbnail || sushi} alt="sushi" />
                </a>
            </div>
            <div className="review-detail-text">
                <div className="review-detail-text__header fs-4">{item.title}</div>
            <div className="review-detail-text__body">{item.content.length > 100 ? <React.Fragment>{item.content.substring(0, 100) + " ........."} <a href={`/review-detail/${item.id}`}>More</a></React.Fragment>  : item.content} </div>
                <div className="review-detail-text__comment">5 comments</div>
                <div className="review-detail-text__time text-center">{ new Date(item.createdAt.seconds*1000).toLocaleString()}</div>
            </div>
        </div>
    )
}
