
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import Header from "../components/Header1";
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from 'react';

import Modal from '../components/modal';
const Home = () => {

    const router = useRouter();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [edificios, setEdificios] = useState(null);
    let i = 1;
    const handleClick = async () => {
        Swal.fire({
            icon: 'success',
            title: 'Renta Exitosa',
        }).then(() => {
            router.push('/VistaUsuario');
        });
    };

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };
    useEffect(() => {
        fetch('edificios.txt')
            .then(response => response.text())
            .then(data => {
                const edificiosArray = data.trim().split('\n').map(line => {
                    const [id, nombre, tipo, precio] = line.split(', ');
                    return { id, nombre, tipo, precio };
                });
                setEdificios(edificiosArray);

            })
            .catch(error => console.log(error));
    }, []);
    const handleModalClose = async () => {
        setIsModalOpen(false);

    };
    async function handleClickDelete(event, value) {
        try {
            const response = await fetch(`/api/EliminarEdificio`, {
                method: 'DELETE',
                body: JSON.stringify({ value }),
                headers: { 'Content-Type': 'application/json' },
            });

            if (response.ok) {
                // Actualizar la lista de edificios después de borrar

            } else {
                console.error('Error al borrar el edificio');
            }
        } catch (error) {
            console.error('Error al borrar el edificio', error);
        }
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
                        Renta  tus <span className="text-blue-600">Edificios</span>
                    </h1>
                    <div className="h-[250px] flex flex-col items-center space-y-6 max-w-[670px] -mt-8">
                        <br></br>
                        <div className="max-w-xl text-gray-300">
                            En esta Apartado puedes agregar nuevos edificios nuevos
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            {edificios && edificios.map((edificio, index) => (
                                <div
                                    key={index}
                                    className="rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900 w-full my-4"
                                    style={{
                                        gridColumn: (index % 3) + 1, // determinar la columna de la cuadrícula
                                        gridRow: Math.floor(index / 3) + 1 // determinar la fila de la cuadrícula
                                    }}
                                >
                                    <div className="p-6">
                                        <h2 className="text-2xl leading-6 font-semibold text-white">
                                            {edificio.nombre}
                                        </h2>
                                        <p className="mt-4 text-zinc-300">{edificio.tipo}</p>
                                        <p className="mt-8">
                                            <span className="text-4xl font-extrabold white">
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
                                            onClick={(event) => handleClickDelete(event, edificio.id)}
                                            value={edificio.id}
                                            className="bg-gray-200 mt-8 block w-full rounded-md py-2 text-sm font-semibold text-black text-center hover:bg-red-600 hover:text-white"
                                        >
                                            <span>Eliminar</span>
                                        </button>



                                    </div>
                                </div>
                            ))}
                        </div>
                        <div
                            className={
                                'rounded-lg shadow-sm divide-y divide-zinc-600 bg-zinc-900'
                            }
                        >
                            <div className="p-6">
                                <h2 className="text-2xl leading-6 font-semibold text-white">

                                </h2>
                                <p className="mt-4 text-zinc-300"></p>
                                <p className="mt-8">
                                    <span className="text-5xl font-extrabold white">
                                        +
                                    </span>
                                    <br></br>
                                    <span className="text-base font-medium text-zinc-100">

                                    </span>
                                </p>
                                <Modal isOpen={isModalOpen} onClose={handleModalClose}></Modal>
                            </div>
                        </div>

                    </div>
                </main>
            </div>
        </motion.div>

    );
};

export default Home;
