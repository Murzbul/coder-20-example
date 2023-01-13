import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import { users } from "./users.js";
import User from "./dao/User.js";

// Les dejo mi variable de entorno en el example para que puedan probar primero y luego puedan
// crear su propio MongoDB Atlas.

try
  {
    // Obtenemos la URL de MongoDB Atlas y lo colocamas en el archivo .env (que deberiamos crear manualmente)
    // para pegarlo en la variable de entorno MONGODB_ATLAS_URI
    let res = await mongoose.connect(process.env.MONGODB_ATLAS_URI);

    /* Listar */
    let usersData = await users.find();
    console.log('usersData')
    console.log(usersData)

    /* New Create */
    const userCreate = new User();
    userCreate.name = 'name';
    userCreate.surname = 'surname';
    userCreate.dni = 1122334455;

    await users.create(userCreate);

    /* Create */
    const user = {
      name: 'Pedro',
      surname: 'Martinez',
      dni: 11111111
    }
    const userSaveModel = new users(user);
    let userSave = await userSaveModel.save();

    /* Listar */
    let usersData1 = await users.find();
    console.log(usersData1)
}
catch(e)
{
  console.log('Error connection DB');
  console.log(e);
}
