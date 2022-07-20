import React, { useEffect, useState } from "react";
import "./index.scss";
import ReviewItemList from "../../components/ReviewItemList/ReviewItemList";
import { getReviews } from "../../lib/api/reviews";
import { Helmet } from "react-helmet";

export default function ReviewList() {
  const [reviews, setReviews] = useState([])
  const [searchInput, setSearchInput] = useState("")
  const [commentSort, setCommentSort] = useState("asc");
  const [datesort, setdateSort] = useState('asc');

  useEffect(() => {
    fetchData()

  }, [])

  const fetchData = async () =>{
    const res = await getReviews()
    setReviews(res)
  }

  const filteredByTitle = reviews.filter((item) => {
    return item.title.match(searchInput);
  });

  const sortByTime = filteredByTitle.sort((a, b) => {
    if (datesort === "asc")
      return new Date(b.createdAt.seconds) - new Date(a.createdAt.seconds);
    if (datesort === "desc")
      return new Date(a.createdAt.seconds) - new Date(b.createdAt.seconds);
  });

  // const sortByComments = sortByTime.sort((a, b) => {
  //   if (datesort === "asc")
  //     return b.comments - a.comments;
  //   if (datesort === "desc")
  //     return a.comments - b.comments;
  // });

  if(!reviews) return ( <div>loading</div> )

  return (
    <div className="container my-5 overflow-hidden">
      <Helmet>
          <title>Review List</title>
        </Helmet>
      <div className="new-review-list__header fs-1 text-center my-3">
        Review list
      </div>

      <div className="new-review-list__options clearfix my-2">
        <div className="float-start">
          <input
            type="text"
            class="form-control"
            placeholder="Review title"
            aria-label="serach"
            aria-describedby="addon-wrapping"
            value={searchInput}
            onChange={(e)=>{
              setSearchInput(e.target.value)
            }}
          />
        </div>
        <div className="float-end">
            <div className="row">
                {/* <div className={`col filter-element ${commentSort}`} onClick={(e)=>{
                  commentSort === "asc" ? setCommentSort("desc") : setCommentSort("asc")
                }}>Comments</div> */}
                <div className={`col filter-element ${datesort}`} onClick={(e)=>{
                  datesort === "asc" ? setdateSort("desc") : setdateSort("asc")
                }}>Dates</div>
            </div>
        </div>
      </div>

      <div className="review-item-list-container">
          <ReviewItemList items={sortByTime}/>
        </div>
    </div>
  );
}
