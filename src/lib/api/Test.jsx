import React, { useEffect, useState } from "react";
import db, { firebase } from "./firebase";
import {
  getReviews,
  createReview,
  getReviewById,
  deleteReview,
} from "./reviews";

export default function Test() {
  const [data, setData] = useState(null);
  const [item, setItem] = useState('');
  const [deleteItem, setDeleteItem] = useState(null);
  const fetchData = async () => {
    try {
      const res = await getReviews();
      console.log("res", res);
      setData(res);

      const itemById = await getReviewById("0wUjF3z06DMoJR4TC4zn");
      setItem(itemById);
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
        title: "pho",
        content: "ga",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert("Sucess roi");
    } catch (err) {
      alert("Fail roi");
    }
  };

  const handleGetItemByid = async () => {
    try {
      const res = await getReviewById(item);

      alert("item title: " + res.title);
      console.log(res)
    } catch (error) {
      alert("get review by id fail");
    }
  };

  const handleDelete = async () => {
    try {
      await deleteReview(deleteItem);

      alert("Delete ok");
    } catch (error) {
      alert("Delete fail");
    }
  };

  if (!data) return "loading";

  return (
    <div>
      {data.map((item) => (
        <div>
          ID:{item.id}, Date: {item.createdAt.seconds}, title:{item.title},
          content:{item.content}
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
        Fetch review list
      </button>
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          HandleSubmit();
        }}
      >
        Post review
      </button>
      <br />
      {/* Get review by id */}
      <input
        type="text"
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          handleGetItemByid();
        }}
      >
        Get review by id
      </button>
      <br />
      {/* Delete */}
      <input
        type="text"
        onChange={(e) => {
          setDeleteItem(e.target.value);
        }}
      />
      <button
        className="btn btn-primary"
        onClick={(e) => {
          e.preventDefault();
          handleDelete();
        }}
      >
        Delete review
      </button>
    </div>
  );
}
