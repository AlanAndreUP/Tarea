import { Carousel } from 'react-responsive-carousel';
import { FaBuilding, FaStoreAlt, FaHome } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from '@/styles/Administrador.module.css';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';



const phrases = [
  'La vida es como una bicicleta, hay que pedalear hacia adelante para no perder el equilibrio.',
  'A veces las cosas buenas tardan tiempo.',
  'Si no puedes volar, corre. Si no puedes correr, camina. Si no puedes caminar, gatea, pero sigue avanzando hacia adelante.',
  'Nunca te rindas. Los milagros ocurren todos los días.',
  'Sigue tus sueños, ellos saben el caminoa.',
];

export default function EligeOpcion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.container}>
        <Image
          src="https://alanandreup.github.io/Tarea/5.png"
          alt="background image"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className={styles.titleContainer}>
          <p className={styles.bigTitle}>ELIGE UNA OPCION</p>
        </div>
        <div className={styles.carouselContainer}>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
            renderArrowPrev={(onClickHandler, hasPrev, label) =>
              hasPrev && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-prev">
                  <FaChevronLeft />
                </button>
              )
            }
            renderArrowNext={(onClickHandler, hasNext, label) =>
              hasNext && (
                <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow carousel-arrow-next">
                  <FaChevronRight />
                </button>
              )
            }
          ><Link href="/VistaAdministrador">
              <div className={styles.carouselItem}>
                <div className={styles.imageContainer}>
                  <Image src="https://alanandreup.github.io/Tarea/10.png" alt="Building" width={150} height={250} />
                  <p className={styles.imageText}>EDIFICIOS</p>
                </div>
              </div>
            </Link>
            <Link href="/VistaAdministrador">
              <div className={styles.carouselItem}>
                <div className={styles.imageContainer}>
                  <Image src="https://alanandreup.github.io/Tarea/11.png" alt="Building" width={150} height={250} />
                  <p className={styles.imageText}>PISOS</p>
                </div>
              </div>
            </Link>
            <Link href="/VistaAdministrador">
              <div className={styles.carouselItem}>
                <div className={styles.imageContainer}>
                  <Image src="https://alanandreup.github.io/Tarea/12.png" alt="Building" width={150} height={250} />
                  <p className={styles.imageText}>LOCALES</p>
                </div>
              </div>
            </Link>
          </Carousel>
        </div>

        <div className={styles.textContainer}>
          <Carousel
            showArrows={false}
            showIndicators={false}
            showStatus={false}
            autoPlay={true}
            infiniteLoop={true}
          >
            {phrases.map((phrase, index) => (
              <div key={index} className={styles.textItem}>
                <p>{phrase}</p>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </motion.div>
  );
}
