import db from "./firebase";

// const getReviews = new Promise(async function (resolve, reject) {
//   try {
//     const snapshot = await db.collection("reviews").get();
//     const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
//     console.log(items);
//     if (items.length === 0) {
//       reject(new Error("No such document!"));
//     }
//     resolve(items);
//   } catch (err) {
//     reject(err);
//   }
// });

const getReviews = async () => {
  try {
    const snapshot = await db.collection("reviews").get();
    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    console.log(items);
    if (items.length === 0) {
      throw new Error("No such document!");
    }
    return items;
  } catch (err) {
    throw err;
  }
};

const createReview = async ({ title, content }) => {
  try {
    const todoRef = db.collection("reviews");
    const status = await todoRef.add({ title, content });
    console.log(status);
  } catch (err) {
    throw err
  }
};

export { getReviews, createReview };
