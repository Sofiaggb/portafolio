import recetario from '../assets/images/proyectos/recetario.jpg'
import servicios from '../assets/images/proyectos/usabuilders.jpg'
import informativa from '../assets/images/proyectos/caipa.jpg'
import { useTranslation } from 'react-i18next'


export default function CardsProyects() {

    const {t}= useTranslation()

    const proyectos = [
        {
            title: t("projects.project1"),
            description: t("projects.description1"),
            image: recetario,
            link: 'https://frontend-recetario.onrender.com',
            git: 'https://github.com/Sofiaggb/RECETARIO'
        },

        {
            title: t("projects.project2"),
            description: t("projects.description2"),
            image: servicios,
            link: 'https://sofiaggb.github.io/usabuilders/',
            git: 'https://github.com/Sofiaggb/usabuilders'
        },

        {
            title: t("projects.project3"),
            description: t("projects.description3"),
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
                       <i className='bx bx-code-alt text-2xl' ></i> <p className='m-auto ml-1' >{t("projects.code")}</p>
                    </a>
                </div>

            ))}

        </>
    )
}
