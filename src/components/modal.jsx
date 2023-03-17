import Modal from 'react-modal';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';
import styles from '@/styles/Crear.module.css';
import Image from 'next/image';
import Link from 'next/link';
import validator from 'validator';
import { useRouter } from 'next/router';


const modal = () => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [localName, setLocalName] = useState('');
  const [localType, setLocalType] = useState('');
  const [rentPrice, setRentPrice] = useState('');

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleLocalNameChange = (event) => {
    setLocalName(event.target.value);
  };

  const handleLocalTypeChange = (event) => {
    setLocalType(event.target.value);
  };

  const handleRentPriceChange = (event) => {
    setRentPrice(event.target.value);
  };

  const handleConfirm = async (e) => {
    e.preventDefault();
    // Enviar datos a servidor
    try {
      const response = await fetch('../api/CrearEdificio', {
        method: 'POST',
        body: JSON.stringify({ localName, localType, rentPrice }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Inmueble creado con éxito',
        }).then(() => {
          // Redirigimos al usuario a la página principal
          router.push('/VistaAdministrador');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al crear Inmueble',
          text: data.message || 'Por favor intente nuevamente.',
        });
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Error al crear Inmueble',
        text: 'Por favor intente nuevamente.',
      });
    }setIsModalOpen(false);
  };
  


return (
  <div>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleModalOpen}>Agregar</button>
    <Modal isOpen={isModalOpen} onRequestClose={handleModalClose} style={{
      content: {
        width: "25%",
        height: "50%",
        margin: "auto"
      }
    }}>  <div className="flex items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Agregar local</h2>
        <form>
          <label className="block mb-2">
            <span className="text-gray-700">Nombre del local:</span>
            <input className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" value={localName} onChange={handleLocalNameChange} />
          </label>
          <label className="block mb-2">
            <span className="text-gray-700">Tipo de local:</span>
            <select className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={localType} onChange={handleLocalTypeChange}>
              <option value="Local">Local</option>
              <option value="Pisos">Pisos</option>
              <option value="Edificio">Edificio</option>
            </select>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Precio de renta:</span>
            <input className="border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number" value={rentPrice} onChange={handleRentPriceChange} />
          </label>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit" onClick={handleConfirm}>
            Confirmar
          </button>
        </form>
      </div>
    </Modal>
  </div>
);
};
export default modal;
