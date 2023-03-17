
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import Header from "../components/Header1";
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

import React, { useState, useEffect } from 'react';


const Home = () => {  
    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [edificios, setEdificios] = useState(null);


  
    const handleModalOpen = () => {
      setIsModalOpen(true);
    };
    useEffect(() => {
        fetch('edificios.txt')
          .then(response => response.text())
          .then(data => {
            const edificiosArray = data.trim().split('\n').map(line => {
              const [id,nombre, tipo, precio] = line.split(', ');
              return { id,nombre, tipo, precio };
            });
            setEdificios(edificiosArray);
          })
          .catch(error => console.log(error));
      }, []);
    const handleModalClose = async () => {
      setIsModalOpen(false);
     
    };
  const handleClick = async () => {
 
    Swal.fire({
        icon: 'success',
        title: 'Renta Exitosa',
      }).then(() => {
        router.push('/VistaUsuario');
      });
    
  };
  
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
        <Head>
          <title>Inmobilaria UP</title>
        </Head>
        <Header />
        <main className="flex flex-1 w-full flex-col items-center  text-center px-4 mt-4 sm:mb-0 mb-8">
      
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-slate-100 sm:text-6xl mb-5">
            Renta  tu <span className="text-blue-600">Edificio</span> de ensueño
          </h1>
          <div className="h-[250px] flex flex-col items-center space-y-6 max-w-[670px] -mt-8">
            <br></br>
            <div className="max-w-xl text-gray-300">
             Edificios Disponibles Para Rentar 
            </div>   
            <div className="flex flex-row flex-wrap gap-4">
  {edificios && edificios.map((edificio, index) => (
    <div
      key={index}
      className={
        index >= 70 ? 'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 w-full my-4' : 'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 w-80 my-4'
      }
    >
      <div className="p-6">
        <h2 className="text-2xl leading-6 font-semibold text-white">
          {edificio.nombre}
        </h2>
        <p className="mt-4 text-zinc-300">{edificio.tipo}</p>
        <p className="mt-8">
          <span className="text-5xl font-extrabold white">
            Renta Mensual
          </span>
          <br></br>
          <span className="text-base font-medium text-zinc-100">
            ${edificio.precio}
          </span>
        </p>
        <button
          variant="slim"
          type="button"
          onClick={handleClick}
          className="bg-gray-200 mt-8 block w-full rounded-md py-2 text-sm font-semibold text-black text-center hover:bg-zinc-900 hover:text-white"
        >
          <span>Rentar ahora</span>
        </button>
      </div>
    </div>
  ))}
</div>


          </div>
        </main>
      </div>
    </motion.div>

  );
};

export default Home;
