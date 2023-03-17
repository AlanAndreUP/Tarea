import fs from 'fs';

export default function handler(req, res) {
  const { correo, contrasena } = req.body;
// console.log(req.body);
  const path = require('path');
  const filepath = path.resolve('./usuarios.txt');
  
  const usuarios = fs.readFileSync(filepath, 'utf-8').split('\n');
  if(!usuarios){
    res.status(402).json({mensaje:'No existe el archivo txt'})
  }
  let usuarioValido = false;
//console.log(usuarios);
//console.log(correo+','+contrasena);
  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i].split(', ');
   // console.log(usuarios);
   // console.log(usuario[1] + ','+ usuario[2]);
    
    if (usuario[1] == correo && usuario[2] == contrasena) {
      
      usuarioValido = true;
      if (usuarioValido) {
        res.status(200).json({ mensaje: 'Inicio de sesión correcto' });
      }
      break;
    }
  }

  if (usuarioValido) {
    res.status(200).json({ mensaje: 'Inicio de sesión correcto' });
  } else {
    res.status(401).json({ mensaje: 'Correo electrónico o contraseña no válidos' });
  }
}
