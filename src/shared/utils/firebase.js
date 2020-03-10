import * as firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const API = {
  get: async (collection, callback) => {
    const db = firebase.firestore();
    const result = [];

    return await db
      .collection(collection)
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          result.push(doc.data());
        });
        callback(result);
      });
  },
  listen: async (collection, callback) => {
    const db = firebase.firestore();
    return await db.collection(collection).onSnapshot(querySnapshot => {
      querySnapshot.docChanges().forEach(change => {
        const _d = change.doc.data();
        if (change.type === 'added') {
          callback(_d);
        }
      });
    });
  },
  post: (collectionName, data, callback) => {
    firebase
      .firestore()
      .collection(collectionName)
      .add(data)
      .then(() => {
        callback();
      })
      .catch(error => {
        console.log(error.message);
      });
  }
};

export default API;
