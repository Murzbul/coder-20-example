import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { readFile } from 'fs/promises';

const serviceAccount = await readFile("./db/basecoderhouseexample-firebase-adminsdk-aq8eg-3bf4fde862.json");

const app = initializeApp({
  credential: cert(JSON.parse(serviceAccount.toString())),
});

console.log('Base Firestore connected!');

CRUD();

async function CRUD()
{
  try
  {
      const db = getFirestore(app);

      // /* CREATE */
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

      const query = db.collection("users");

      for (const userToAdd of usersToAdd)
      {
          const doc = await query.add(userToAdd)
          usersDocs.push(doc);
      }

      console.log('Data inserted.');

      // /* READ ALL */
      const querySnapshot = await query.get();
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().name} ${doc.data().surname}`);
      });

      /* READ ONE */
      let  idRead = usersDocs[0].id;
      const docRef = query.doc(idRead);
      const docSnap = await docRef.get();

      if (docSnap.exists) {
        console.log("Document data:", docSnap.data());
      } else {
        console.log("No such document!");
      }

      /* UPDATE */
      const doc = await query.add({
         name: "Daniel",
         surname: "Rodriguez",
         dni: 123123123
      })
      const writeTimestamp = await doc.update({
          name: "Daniel Update",
      });
      console.log("Updated doc!");
      console.log(writeTimestamp);

      // /* DELETE DOC */
      let  idDelete = usersDocs[1].id;
      const docRefDelete = query.doc(idRead);
      await docRefDelete.delete();
      console.log(`delete doc!, ID: ${idDelete}`);
  }
  catch (e)
  {
    console.log('Error connection Firestore');
    console.log(e);
  }
}

