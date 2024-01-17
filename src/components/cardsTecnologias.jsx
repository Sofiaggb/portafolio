import htmlCss from '../assets/images/tecnologias/html-css.png'
import tailwind from '../assets/images/tecnologias/tailwind.png'
import js from '../assets/images/tecnologias/js.png'
import react from '../assets/images/tecnologias/react.png'
import nodejs from '../assets/images/tecnologias/nodejs.png'
import mongodb from '../assets/images/tecnologias/mongodb.png'
import { useTranslation } from 'react-i18next'

export default function CardsTecnologias() {
    const {t} = useTranslation();

    const tecnologias = [
        { title: "HTML y CSS", description: t("tecnologias.htmlCss"), image: htmlCss },
        { title: "Tailwind", description: t("tecnologias.tailwind"), image: tailwind },
        { title: "JavaScript", description: t("tecnologias.js"), image: js },
        { title: "React", description: t("tecnologias.react"), image: react },
        { title: "Node.js", description: t("tecnologias.nodejs"), image: nodejs },
        { title: "MongoDB", description: t("tecnologias.mongodb"), image: mongodb },
    ]

    return (
        <>
            {tecnologias.map((tec, i) => (
                <div key={i} className="flex flex-col mx-6 max-[400px]:mx-3 text-center items-center  ">
                    <div className="w-28 max-[400px]:w-20 h-28 max-[400px]:h-20 rounded-full rose">
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
