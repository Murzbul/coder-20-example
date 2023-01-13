import dotenv from 'dotenv';
dotenv.config();

import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGEGIN_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

CRUD();

async function CRUD()
{
  try
  {
    const app = initializeApp(firebaseConfig);
    console.log('Base Firebase connected!');

    const db = getFirestore(app);

    /* CREATE */
    const usersToAdd = [
      {
       name: "Marcos",
       surname: "Martinez",
       dni: 11111111
      },
     {
       name: "Marcelo",
       surname: "Garcia",
       dni: 222222222
      }
    ];

    const usersDocs = [];

    for (const userToAdd of usersToAdd)
    {
        const doc = await addDoc(collection(db, "users"), userToAdd);
        usersDocs.push(doc);
    }

    console.log('Data inserted.');

    // /* READ ALL */
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data().name} ${doc.data().surname}`);
    });

    /* READ ONE */
    let  idRead = usersDocs[0].id;
    const docRef = doc(db, `users/${idRead}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }

    /* UPDATE */
    // const usersRef = doc(db, userCreated.path); /* Es posible usar el path directamente en este caso */
    const userUpdateRef = doc(db, `users/${idRead}`); /* Este seria un caso mas real, que seria teniendo el ID */
    await updateDoc(userUpdateRef, {
        name: "Marcelo Update",
    });
    console.log("Updated doc!");

    // /* DELETE DOC */
    let  idDelete = usersDocs[1].id;
    const usersRef = doc(db, `users/${idDelete}`);
    await deleteDoc(usersRef);
    console.log(`delete doc!, ID: ${idDelete}`);
  }
  catch (e)
  {
    console.log('Error connection Firestore');
    console.log(e);
  }
}

