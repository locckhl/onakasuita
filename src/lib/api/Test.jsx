import React, { useEffect, useState } from "react";
import { getReviews, createReview } from "./reviews";

export default function Test() {
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await getReviews();
      setData(res);
    } catch (err) {
      throw err;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const HandleSubmit = async () => {
    try {
      await createReview({
        title: "banh my",
        content: "bla bla",
      });
      alert("Sucess roi");
    } catch (err) {
      alert("Fail roi");
    }
  };

  if (!data) return "loading";
  return (
    <div>
      {data.map((item, index) => (
        <div>
          {index + 1}. title:{item.title}, content:{item.content}
          <br />
          <br />
        </div>
      ))}
      ;
      <br />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          fetchData();
        }}
      >
        Fetch data
      </button>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          HandleSubmit();
        }}
      >
        Post data
      </button>
    </div>
  );
}
