import { readFile, writeFile } from 'fs/promises';

export default async function handler(req, res) {
  if (!req.body) {
    res.status(402).json({ message: 'Error al crear el inmueble' });
  }

  const { localName, localType, rentPrice } = req.body;
  const path = require('path');
  const filepath = './edificios.txt';
  console.log(filepath);

  try {
    // Leer el contenido del archivo
    const content = await readFile(filepath, 'utf-8');

    // Analizar el contenido para obtener el último id
    const lines = content.trim().split('\n');
    const lastLine = lines[lines.length - 1];
    const lastId = lastLine ? parseInt(lastLine.split(', ')[0]) : -1;

    // Incrementar el último id y agregar el registro con el nuevo id al archivo
    const newId = lastId + 1;
    const newLine = `${newId}, ${localName}, ${localType}, ${rentPrice}\n`;

    await writeFile(filepath, newLine, { flag: 'a' });

    res.status(200).json({ message: 'Inmueble creado con éxito' });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Error al crear el inmueble' });
  }
}
