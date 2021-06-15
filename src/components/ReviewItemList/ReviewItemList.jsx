import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import ReviewItem from "../ReviewItem/ReviewItem";
export default function ReviewItemList({ items }) {
  const [data, setData] = useState(items);
  useEffect(() => {
    console.log(items);
    return () => {};
  }, []);
  if (!items) return <Skeleton count={5} />;
  return (
    <div className="new-review-list row row-cols-1 row-cols-lg-4 justify-content-center">
      {items.map((item) => (
        <ReviewItem item={item}/>
      ))}
    </div>
  );
}
