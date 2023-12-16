import recetario from '../assets/images/proyectos/recetario.jpg'
import servicios from '../assets/images/proyectos/usabuilders.jpg'
import informativa from '../assets/images/proyectos/caipa.jpg'


export default function CardsProyects() {
    const proyectos = [
        {
            title: 'Recetario',
            description: 'Recetario de cocina aquí puedes consultar, almacenar, editar y borrar tu receta',
            image: recetario,
            link: 'https://frontend-recetario.onrender.com',
            git: 'https://github.com/Sofiaggb/RECETARIO'
        },

        {
            title: 'Web de Servicios',
            description: 'Página web que ofrece servicios de arreglo y mantenimiento de casas o apartamentos.',
            image: servicios,
            link: 'https://sofiaggb.github.io/usabuilders/',
            git: 'https://github.com/Sofiaggb/usabuilders'
        },

        {
            title: 'Web Informativa',
            description: 'Página web informativa sobre la institucion CAIPA que trata sobre el espectro autista',
            image: informativa,
            link: 'https://sofiaggb.github.io/CAIPA/',
            git: 'https://github.com/Sofiaggb/CAIPA'
        }
    ]

    return (
        <>
            {proyectos.map((proyecto, i) => (

                <div key={i} className="flex flex-col m-6 text-center max-[400px]:w-11/12 items-center rounded overflow-hidden ">
                    <a href={proyecto.link} className='hover:mx-1 '>
                        <img className="w-full  h-52 max-md:h-72 max-[550px]:h-60 max-[470px]:h-56 max-[400px]:h-48  max-[550px]:object-fill rounded  border border-zinc-700 hover:border-red-300 object-cover" 
                        src={proyecto.image} alt={proyecto.title} />

                        <div className="px-6 py-4 ">
                            <div className="font-bold text-xl mb-2">{proyecto.title}</div>
                            <p className=" text-sm max-lg:w-96 max-[450px]:w-11/12 m-auto">
                                {proyecto.description}
                            </p>
                        </div>
                    </a>
                    <a
                        className="flex rounded border border-rose-300 rose px-6 py-1 text-sm font-medium text-white hover:bg-transparent hover:text-rose-400 focus:outline-none focus:ring active:text-rose-400"
                        href={proyecto.git}
                    >
                       <i className='bx bx-code-alt text-2xl' ></i> <p className='m-auto ml-1' >Código</p>
                    </a>
                </div>

            ))}

        </>
    )
}
