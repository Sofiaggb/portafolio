
import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";
import { SiJavascript, SiGit, SiGithub } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaPython, FaNode } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import Custom from "../assets/images/tecnologias/Custom";
import { GrMysql } from "react-icons/gr";
import { useTranslation } from 'react-i18next'

export default function CardsTecnologias() {
    const {t} = useTranslation()

    const frontend = [
        { title: "HTML", image: <TbBrandHtml5 className=" cursor-pointer transition-colors  hover:text-orange-600" /> },
        { title: "CSS", image: <TbBrandCss3 className=" cursor-pointer transition-colors  hover:text-sky-600" /> },
        { title: "Tailwind", image: <RiTailwindCssFill className=" cursor-pointer transition-colors  hover:text-cyan-500" /> },
        { title: "JavaScript", image: <TbBrandJavascript className=" cursor-pointer transition-colors  hover:text-yellow-400" /> },
        { title: "React", image: <FaReact className=" cursor-pointer transition-colors  hover:text-cyan-400" /> },
        { title: "Customtkinter", image: <div className="h-12 w-12 cursor-pointer transition-colors  hover:text-blue-600"><Custom /></div> },
    ];

    const backend = [
        { title: "Node.js", image: <FaNode className=" cursor-pointer transition-colors  hover:text-lime-700" /> },
        { title: "Express JS", image: <SiJavascript className=" cursor-pointer transition-colors  hover:text-yellow-400" /> },
    ];

    const databases = [
        { title: "MongoDB", image: <BiLogoMongodb className=" cursor-pointer transition-colors  hover:text-emerald-700" /> },
        { title: "MySQL", image: <GrMysql className=" cursor-pointer transition-colors  hover:text-cyan-500" /> }
    ]

    const programmingLanguages = [
        { title: "Python", image: <FaPython className=" cursor-pointer transition-colors  hover:text-cyan-800" /> }
    ];

    const versionControl = [
        { title: "Git", image: <SiGit className=" cursor-pointer transition-colors  hover:text-orange-600" /> },
        { title: "GitHub", image: <SiGithub className=" cursor-pointer transition-colors  hover:text-black" /> }
    ];



    const renderTecnologias = (tecnologias, color) => (
        tecnologias.map((tec, i) => (
            <div key={i} className="flex flex-col mx-1  text-center 
            items-center justify-center  ">
                <div className={`flex justify-center items-center text-4xl text-red-50
                 w-14  h-14 rounded-full ${color}`}>
                    {tec.image}
                </div>
                <div className="p-2 ">
                    <h3 className="text-sm font-bold">
                        {tec.title}
                    </h3>
                </div>
            </div>
        ))
    );

    return (
        <>
            <div className="md:flex">
                <div className="flex flex-col m-4 text-center">
                    <h2 className="text-base font-bold">Frontend</h2>
                    <div className="flex flex-wrap justify-center">
                        {renderTecnologias(frontend, "bg-rose")}
                    </div>
                </div>
                <div className="flex flex-col m-4 text-center">
                    <h2 className="text-base font-bold">Backend</h2>
                    <div className="flex flex-wrap justify-center ">
                        {renderTecnologias(backend, ' bg-purple' )}
                    </div>
                </div>
            </div>
            <div className="md:flex justify-center">
                <div className="flex flex-col m-4 text-center">
                    <h2 className="text-base font-bold">{t("tecnologias.db")}</h2>
                    <div className="flex flex-wrap justify-center">
                        {renderTecnologias(databases, 'bg-ligthBlue')}
                    </div>
                </div>
                <div className="flex flex-col m-4 text-center">
                    <h2 className="text-base font-bold ">{t("tecnologias.programing")}</h2>
                    <div className="flex flex-wrap justify-center">
                        {renderTecnologias(programmingLanguages, 'bg-blueTwo')}
                    </div>
                </div>
                <div className="flex flex-col m-4 text-center">
                    <h2 className="text-base font-bold">{t("tecnologias.versions")}</h2>
                    <div className="flex flex-wrap  justify-center 0">
                        {renderTecnologias(versionControl, 'bg-gray-500')}
                    </div>
                </div>
            </div>
        </>
    )
}
