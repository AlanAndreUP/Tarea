import { readFile } from 'fs/promises';
import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const { value } = req.body;
  const filepath = path.resolve('./public/edificios.txt');

  try {
    const content = await readFile(filepath, 'utf-8');
    if (!content) {
      res.status(402).json({ mensaje: 'No existe el archivo txt' });
    }

    const edificios = content.split('\n').map((linea) => linea.split(', '));
    const edificiosEnFilas = [];
    for (let i = 0; i < edificios.length; i += 4) {
      edificiosEnFilas.push(edificios.slice(i, i + 4));
    }

    let usuarioValido = false;
    let indiceFila = -1;
    for (let i = 0; i < edificiosEnFilas.length; i++) {
      const id = edificiosEnFilas[i][0][0];
      if (id == value) {
        usuarioValido = true;
        indiceFila = i;
        break;
      }
    }

    if (usuarioValido) {
      edificiosEnFilas.splice(indiceFila, 1);
      const nuevoContenido = edificiosEnFilas
        .flat()
        .map((fila) => fila.join(', '))
        .join('\n');
      fs.writeFileSync(filepath, nuevoContenido, 'utf-8');
      res.status(200).json({ mensaje: 'Eliminacion Correcta' });
    } else {
      res.status(401).json({ mensaje: ' No se encontro el edificio' });
    }
  } catch (error) {
    console.error(error);
    res.status(401).json({ mensaje: 'Error al buscar la cuenta' });
  }
}
