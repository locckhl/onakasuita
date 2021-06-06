import db from "./firebase";

const getComments = async () => {
  try {
    const snapshot = await db.collection("comments").orderBy("createdAt").get();
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

const getCommentById = async (id) => {
  try {
    const item = await db.doc(`comments/${id}`).get();
    // console.log(item)
    return item.data();
  } catch (err) {
    throw err;
  }
};



const createComment = async ({ content, createdAt, userId, reviewId }) => {
  try {
    const status = await db
      .collection("comments")
      .add({ content, createdAt, userId, reviewId });
    console.log(status);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const deleteComment = async (id) => {
  try {
    const status = await db.doc(`comments/${id}`).delete();
    console.log("status", status);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export {
  getComments,
  getCommentById,
  createComment,
  deleteComment,
};
