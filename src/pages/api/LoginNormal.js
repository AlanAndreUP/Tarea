import fs from 'fs';

export default function handler(req, res) {
  const { correo, contrasena } = req.body;

  const path = require('path');
  const filepath = './usuariosnormales.txt';
  
  const usuarios = fs.readFileSync(filepath, 'utf-8').split('\n');
  
  if(!usuarios){
    res.status(402).json({mensaje:'No existe el archivo txt'})
  }
  
  let usuarioValido = false;

  for (let i = 0; i < usuarios.length; i++) {
    const usuario = usuarios[i].split(', ');
    
    if (usuario[1] == correo && usuario[2] == contrasena) {
      usuarioValido = true;
      break;
    }
  }

  if (usuarioValido) {
    res.status(200).json({ mensaje: 'Inicio de sesión correcto' });
  } else {
    res.status(401).json({ mensaje: 'Correo electrónico o contraseña no válidos' });
  }
}
