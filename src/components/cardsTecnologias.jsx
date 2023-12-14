import html from '../assets/images/tecnologias/html.png'
import css from '../assets/images/tecnologias/css.png'
import js from '../assets/images/tecnologias/js.png'
import react from '../assets/images/tecnologias/react.png'
import nodejs from '../assets/images/tecnologias/nodejs.png'
import mongodb from '../assets/images/tecnologias/mongodb.png'

export default function CardsTecnologias() {

    const tecnologias = [
        { title: "HTML", description: "Lenguaje de Marcado de Hipertexto", image: html },
        { title: "CSS", description: " Lenguaje de hojas de estilo en cascada", image: css },
        { title: "JavaScript", description: " Lenguaje de programación  para la creación contenidos dinámicos en páginas web", image: js },
        { title: "React", description: " Librería JavaScript de código abierto, basada en componentes.", image: react },
        { title: "Node.js", description: "Entorno en tiempo de ejecución multiplataforma", image: nodejs },
        { title: "MongoDB", description: "Sistema de base de datos NoSQL", image: mongodb },
    ]

    return (
        <>
            {tecnologias.map((tec, i) => (
                <div key={i} className="flex flex-col mx-6 text-center items-center  ">
                    <div className="w-28 h-28 rounded-full rose">
                        <img className="w-full h-full object-cover" src={tec.image} alt={tec.title} />
                    </div>
                    <div className="p-4 md:p-5">
                        <h3 className="text-lg font-bold">
                            {tec.title}
                        </h3>
                        <div className='w-full h-px rose my-2'></div>
                        <p className="mt-1 text-xs">
                            {tec.description}
                        </p>
                    </div>
                </div>
            ))}
        </>

    )
}
