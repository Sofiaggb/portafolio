import recetario from '../assets/images/proyectos/recetario.jpg'
import servicios from '../assets/images/proyectos/usabuilders.jpg'
import informativa from '../assets/images/proyectos/caipa.jpg'


export default function CardsProyects() {
    const proyectos = [
        {
            title: 'Recetario',
            description: 'Recetario de cocina donde se puedes consultar, almacenar editar y borrar una receta a través de la creación una cuenta',
            image: recetario,
            link: 'https://frontend-recetario.onrender.com'
        },

        {
            title: 'Web de Servicios',
            description: 'Página web que ofrece servicios de arreglo y mantenimiento de casas o apartamentos.',
            image: servicios,
            link: 'https://sofiaggb.github.io/usabuilders/'
        },

        {
            title: 'Web Informativa',
            description: 'Página web informativa sobre la institucion CAIPA que trata sobre el espectro autista',
            image: informativa,
            link: 'https://sofiaggb.github.io/CAIPA/'
        }
    ]

    return (
        <>
            {proyectos.map((proyecto, i) => (

                <div key={i} className="flex flex-col m-6 text-center items-center rounded overflow-hidden ">
                    <a href={proyecto.link} className='hover:mx-1 '>
                        <img className="w-full h-52 hover:h-60 rounded object-cover" src={proyecto.image} alt={proyecto.title} />

                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{proyecto.title}</div>
                            <p className=" text-sm max-lg:w-96">
                                {proyecto.description}
                            </p>
                        </div>
                    </a>
                </div>

            ))}

        </>
    )
}
