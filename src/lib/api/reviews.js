import db from "./firebase";

const getReviews = async () => {
  try {
    const snapshot = await db.collection("reviews").orderBy("createdAt").get();
    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(items);
    if (items.length === 0) {
      throw new Error("No such document!");
    }
    return items;
  } catch (err) {
    throw err;
  }
};


const getReviewById = async (id) => {
  try {
    const item = await db.doc(`reviews/${id}`).get();
    // console.log(item)
    return item.data();
  } catch (err) {
    throw err;
  }
};

const createReview = async ({ title, content, createdAt }) => {
  try {
    const status = await db.collection("reviews").add({ title, content, createdAt });
    console.log(status);
  } catch (err) {
    throw err;
  }
};

const deleteReview = async (id) => {
  try {

    const status = await db.doc(`reviews/${id}`).delete()
    console.log("status", status);
  } catch (err) {
    throw err;
  }
};

export { getReviews, getReviewById, createReview, deleteReview  };
