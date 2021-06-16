import db, {firebase} from "./firebase";

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
const getReviewComments = async (id) => {
  try {
    const snapshot = await db
      .collection(`comments`)
      .where("reviewId", "==", id)
      .get();

    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // console.log(items);
    // if (items.length === 0) {
    //   throw new Error("No such document!");
    // }
    return items;
  } catch (err) {
    throw err;
  }
};
const createReview = async ({ title, content, userId, thumbnail }) => {
  try {
    const status = await db
      .collection("reviews")
      .add({ title, content, createdAt: firebase.firestore.FieldValue.serverTimestamp(), userId, thumbnail });
    // console.log("status", status);
    return status
  } catch (err) {
    throw err;
  }
};

const deleteReview = async (id) => {
  try {
    const status = await db.doc(`reviews/${id}`).delete();
    console.log("status", status);
  } catch (err) {
    throw err;
  }
};

export {
  getReviews,
  getReviewById,
  getReviewComments,
  createReview,
  deleteReview,
};
