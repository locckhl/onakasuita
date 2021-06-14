import db from "./firebase";
import { firebase } from "./firebase";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/",
  signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

const getUserById = async (id) => {
  try {
    const item = await db.doc(`users/${id}`).get();
    // console.log(item)
    return item.data();
  } catch (err) {
    throw err;
  }
};

const getUserReviews = async (id) => {
  try {
    const snapshot = await db
      .collection(`reviews`)
      .where("userId", "==", id)
      .get();
    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // if (items.length === 0) {
    //   throw new Error("No such user!");
    // }
    return items;
  } catch (err) {
    throw err;
  }
};

const getUserComments = async (id) => {
  try {
    const snapshot = await db
      .collection(`comments`)
      .where("userId", "==", id)
      .get();
    const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    // if (items.length === 0) {
    //   throw new Error("No such user!");
    // }
    return items;
  } catch (err) {
    throw err;
  }
};

const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(uid).set({ username: user.displayName, email: user.email, id: user.uid });
    return {
      username: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
};

const updateUser = async ({ id, avatar, phone, username }) => {
  try {
    const userDoc = await db.collection("users").doc(id).get();
    console.log("userdoc", userDoc);
    if (userDoc.exists) {
      await db
        .collection("users")
        .doc(id)
        .update({ ...userDoc.data(), avatar, phone, username });
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const blockUser = async (id) => {
  try {
    const userDoc = await db.collection("users").doc(id).get();
    console.log("userdoc", userDoc);
    if (userDoc.exists) {
      await db
        .collection("users")
        .doc(id)
        .update({ ...userDoc.data(), block: true });
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const unBlockUser = async (id) => {
  try {
    const userDoc = await db.collection("users").doc(id).get();
    if (userDoc.exists) {
      await db
        .collection("users")
        .doc(id)
        .update({ ...userDoc.data(), block: false });
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};

const uploadImage = async (image) => {
  const ref = firebase.storage().ref().child(`/images/${image.name}`);
  let downloadUrl = "";
  try {
    await ref.put(image);
    downloadUrl = await ref.getDownloadURL();
  } catch (err) {
    console.log(err);
  }
  return downloadUrl;
};

const auth = firebase.auth();
export {
  uiConfig,
  storeUserInfo,
  updateUser,
  blockUser,
  unBlockUser,
  getUserById,
  getUserReviews,
  getUserComments,
  uploadImage,
  auth,
};
