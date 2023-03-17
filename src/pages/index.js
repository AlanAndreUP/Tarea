
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import Header from "../components/Header";
import SquigglyLines from "../components/SquigglyLines"; 
import { Testimonials } from "../components/Testimonials";

const Home = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  ><div className="flex max-w-6xl mx-auto flex-col items-center justify-center py-2 min-h-screen">
      <Head>
        <title>Inmobiliaria UP</title>
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 sm:mt-20 mt-20 background-gradient">
       
        <h1 className="mx-auto max-w-4xl font-display text-5xl font-bold tracking-normal text-gray-300 sm:text-7xl">
         Alquila los mejores edifcios{" "}
          <span className="relative whitespace-nowrap text-blue-600">
            <SquigglyLines />
            <span className="relative">con Inmobiliaria UP</span>
          </span>{" "}
          a los mejores precios.
        </h1>
        <h2 className="mx-auto mt-12 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
         Alquila Edificios, Pisos, Locales al mejor precios 
          sin comision  100% libre   de impuestos .
        </h2>
        <Link
          className="bg-blue-600 rounded-xl text-white font-medium px-4 py-3 sm:mt-10 mt-8 hover:bg-blue-500 transition"
          href="/crearUsuario"
        >
          Crea tu cuenta ahora
        </Link>
        <div className="flex justify-between items-center w-full flex-col sm:mt-10 mt-6">
          <div className="flex flex-col space-y-10 mt-4 mb-16">
            <div className="flex sm:space-x-8 sm:flex-row flex-col">
              <div>
                <h3 className="mb-1 font-medium text-lg">Locales</h3>
                <Image
                  alt="Locales"
                  src="/11.png"
                  className="w-full object-cover h-96 rounded-2xl"
                  width={400}
                  height={400}
                />
              </div>
              <div className="sm:mt-0 mt-8">
                <h3 className="mb-1 font-medium text-lg">Edificios</h3>
                <Image
                  alt="Edificios"
                  width={400}
                  height={400}
                  src="/10.png"
                  className="w-full object-cover h-96 rounded-2xl sm:mt-0 mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Testimonials />
   
    </div>
    </motion.div>
  );
};

export default Home;
