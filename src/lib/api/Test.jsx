import React, { useEffect, useState } from "react";
import { Counter } from "../../features/counter/Counter";
import { createComment, deleteComment, getCommentById, getComments } from "./comment";
import db, { firebase } from "./firebase";
import {
  getReviews,
  createReview,
  getReviewById,
  deleteReview,
  getReviewComments
} from "./reviews";
import { updateUser, unBlockUser, blockUser, getUserById, auth, getUserReviews, getUserComments } from "./user";

{/* Test review api */}
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
        title: "hot hot",
        content: "hotdog",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        userId:auth.currentUser.uid,
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
    <div className="container">

      <Counter />
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
      <br />
      <button
        className="btn btn-primary me-5"
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
      <br />
      {/* Get review by id */}
      <input
        type="text"
        className="me-5"
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
      <br />
      {/* Delete */}
      <input
        type="text"
        className="me-5"
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


{/* Test user api */}
// export default function Test() {
  
//   const fetchData = async () => {
//     try {
//       // const updateUserResult = await updateUser({
//       //   id: "KwQepc85KYEuSghSKX4n",
//       //   avatar: "",
//       //   phone: "0322",
//       // });

//       // const query = await blockUser("KwQepc85KYEuSghSKX4n");
//       // const query = await unBlockUser("KwQepc85KYEuSghSKX4n");
//       // console.log("data", query);

//       // if (auth.currentUser) {
//       //   const query = await getUserById(auth.currentUser.uid);
//       //   console.log("data", query);
//       // }

//       // const query = await getUserReviews("zQK9ZKVXtff4lqh7pyTELYpO6GO2");
//       const query = await getUserComments("zQK9ZKVXtff4lqh7pyTELYpO6GO2");
//       console.log("data", query);
//     } catch (err) {
//       throw err;
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return <div></div>;
// }

{/* Test comment api */}
// export default function Test() {
//   const fetchData = async () => {
//     try {
//       // const query = await createComment({
//       //   content: "bai review chat luong2",
//       //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
//       //   userId:auth.currentUser.uid,
//       //   reviewId:"M5urkL6iKu2KskZ8qENA",
//       // })
     
//       // const query = await getComments()
//       // const query = await getCommentById("n5r7nkBaNpzfdjfngNhS")
//       // const query = await deleteComment("n5r7nkBaNpzfdjfngNhS")
//       const query = await getReviewComments("M5urkL6iKu2KskZ8qENA")

//       console.log("data", query);
//     } catch (err) {
//       throw err;
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   return <div></div>;
// }