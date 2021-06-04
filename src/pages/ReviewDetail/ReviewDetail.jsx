import React from "react";
import CommentList from "../../components/CommentList/CommentList";
import "./index.scss";
import avatar from "../../assets/images/nano.jpg";

export default function ReviewDetail() {
  return (
    <div className="review-container my-3 py-3">
      <div className="rewview-header fs-1">
        Padres Announce 2021 Promotional Schedule
      </div>
      <div className="rewview-info d-flex">
        <div className="review-info__left me-4">
          <a href="/user-profile">
            <img src={avatar} alt="" />
          </a>
        </div>
        <div className="review-info__right d-flex">
          <div className="row flex-column">
            <span className="author-name fs-3 col">FriarWire</span>
            <div className="d-flex col">
              <div className="review-date me-3">6/3/3021 </div>
              <div className="">
                <a href="">5 comments</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="rewview-body">
        SAN DIEGO — The San Diego Padres today announced their 2021 promotional
        schedule, including all-fan giveaways and events every home weekend
        during the remainder of the 2021 Major League Baseball season.
        Single-game tickets for remaining 2021 regular season home games will go
        on sale this Friday, June 4 at 10:00 a.m. here. The excitement kicks off
        on Thursday, June 17th as the Padres celebrate Petco Park’s return to
        full capacity with all the pageantry of San Diego’s Opening Day,
        including pre-game DJ entertainment at the Sycuan Stage in Gallagher
        Square, a presentation of the American flag with over 250 active-duty
        military members, a military flyover, on-field lineup introductions, and
        a post-game fireworks show. Beginning June 18th, every Friday home game
        is Party in the Park presented by Southwest Airlines featuring a
        BeerFest, WineFest, CocktailFest, or Fiesta in the Park presented by
        Verizon. Party in the Park is a pregame happy hour series located in
        Gallagher Square from 5:00 to 7:00 p.m. with $5 drink specials and live
        entertainment. Saturday games throughout the season will be highlighted
        by all fan giveaways starting on June 19th when every fan in attendance
        will receive a Padres Aloha Shirt presented by Southwest Airlines, which
        will be available in five different sizes (Youth Large, M, L, XL, 2XL;
        while supplies last). Additional wearables, collectables and fan
        favorites will be featured in 2021, including a Fernando Tatis Jr.
        bobblehead (Petco), Beach Towel (Southwest Airlines), Hoodie (COX),
        Fleece Blanket (Sycuan), Padres Backpack (UC San Diego), MLB Network
        Reusable Tote Bag, and Panel Hat (Mitel). New to the promotional lineup
        this season are two dates featuring all-kid giveaway items (available
        for children 14 and younger) that include a Fernando Tatis Jr. Arm
        Sleeve and Kids Backpack (SWA). The complete list of giveaways can be
        found here.
      </div>
      <div className="review-comments-container">
       <CommentList />
      </div>
      
      <div className="comment-form">
        <div className="fs-4">Leave a comment</div>
        <div class="input-group mb-4">
          <span class="input-group-text">Hi username</span>
          <textarea class="form-control" aria-label="With textarea"></textarea>
        </div>
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon03"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
