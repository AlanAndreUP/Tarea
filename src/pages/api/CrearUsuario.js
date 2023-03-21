import { writeFile } from 'fs/promises';

export default async function handler(req, res) {
    const { nombre, email, password } = req.body;
  //  console.log(req.body);
    const path = require('path');
    const filepath ='./usuarios.txt';
    console.log(filepath);
    
    try {
      // Escribir en el archivo
      await writeFile(filepath, `${nombre}, ${email}, ${password}\n`, { flag: 'a' });

      res.status(200).json({ message: 'Cuenta creada con éxito' });
    } catch (error) {
      console.error(error);
  //    console.log(password);
      res.status(401).json({ message: 'Error al crear la cuenta' });
    }
  }
  
