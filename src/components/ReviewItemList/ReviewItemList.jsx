import React from 'react'
import ReviewItem from '../ReviewItem/ReviewItem'
export default function ReviewItemList() {
    return (
        <div className="new-review-list row row-cols-1 gx-5 gy-5 row-cols-lg-4 justify-content-center">
            <div className="col">
              <ReviewItem />
            </div>
            <div className="col">
              <ReviewItem />
            </div>
            <div className="col">
              <ReviewItem />
            </div>
            <div className="col">
              <ReviewItem />
            </div>
            <div className="col">
              <ReviewItem />
            </div>
          </div>
    )
}
