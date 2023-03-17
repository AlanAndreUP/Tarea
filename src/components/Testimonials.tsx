import Image from "next/image";

const testimonials = [
  [
    {
      content: "Los mejores edificios y los mas baratos",
      
      author: {
        name: "Eve Porcello",
        role: "Arquitecta",
        image: "/eve.jpg",
      },
    },

    {
      content:
        "Finalmente, Consegui un local para mi panaderia",
     
      author: {
        name: "Arthur Dvorkin",
        role: "Panadero",
        image: "/arthur.jpg",
      },
    },
  ],
  [
    {
      content:
        "Me encanta el sistema de Inmuebles UP",
    
      author: {
        name: "Ade Dada",
        role: "Localero",
        image: "/ade.jpeg",
      },
    },
    {
      content:
        "Me gusta la manera de rentas y sin impuestos!.",
      
      author: {
        name: "Rob Attfield",
        role: "Ingeniero Industrial",
        image: "/rob.jpg",
      },
    },
  ],
  [
    {
      content:
        "Es fantasticos los precios que tienen y las ubicaciones",

      author: {
        name: "Music",
        role: "Empleado",
        image: "/music.jpg",
      },
    },
    {
      content: "🤯 el mejor sitio web del mundo",
   
      author: {
        name: "Noricumbo ",
        role: "Maestro de la Up",
        image: "/github.jpg",
      },
    },
  ],
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="What our customers are saying"
      className="py-10"
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 md:px-7">
        <div className="mx-auto md:text-center">
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-bold tracking-normal text-gray-300 sm:text-6xl">
            Somos los mejores
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg sm:text-gray-400  text-gray-500 leading-7">
           y nuestros  92,000+ Usuarios respaldan nuestros sistema.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-16 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li
                    key={testimonialIndex}
                    className="hover:scale-105 transition duration-300 ease-in-out "
                  >
                    <a href={testimonial.link} target="_blank" rel="noreferrer">
                      <figure className="relative rounded-2xl bg-gray-600 p-6 shadow-xl shadow-slate-900/10">
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-white">
                            "{testimonial.content}"
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-white">
                              {testimonial.author.name}
                            </div>
                            <div className="mt-1 text-sm text-gray-400">
                              {testimonial.author.role}
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <Image
                              className="h-14 w-14 object-cover"
                              src={testimonial.author.image}
                              alt="picture of the testimonial author"
                              width={56}
                              height={56}
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
