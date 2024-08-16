import recetario from '../assets/images/proyectos/recetario.jpg'
import facturacion from '../assets/images/proyectos/sistema_facturacion.jpg'
import servicios from '../assets/images/proyectos/usabuilders.jpg'
import informativa from '../assets/images/proyectos/caipa.jpg'
import amazonCopy from '../assets/images/proyectos/amazonCopy.jpg'
import bazaar from '../assets/images/proyectos/bazaar.jpg'

import { useTranslation } from 'react-i18next'

import { TbBrandHtml5, TbBrandCss3 } from "react-icons/tb";
import { SiJavascript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact, FaPython, FaNode, FaEye, FaArrowAltCircleDown } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import Custom from "../assets/images/tecnologias/Custom";
import { GrMysql } from "react-icons/gr";

export default function CardsProyects() {

    const { t } = useTranslation();

    const proyectos = [
        {
            title: t("projects.recipeBook"),
            description: t("projects.descriptionRecipeBook"),
            image: recetario,
            link: 'https://frontend-recetario.onrender.com',
            git: 'https://github.com/Sofiaggb/RECETARIO',
            technologies: [
                { icon: <TbBrandHtml5 />, },
                { icon: <TbBrandCss3 />, },
                { icon: <FaReact />, },
                { icon: <TbBrandJavascript />, },
                { icon: <RiTailwindCssFill />, },
                { icon: <BiLogoMongodb />, },
                { icon: <FaNode />, },
                { icon: <SiJavascript />, },
            ]
        },
        {
            title: t("projects.deskApp"),
            description: t("projects.descriptionDeskApp"),
            image: facturacion,
            // link: 'https://drive.google.com/uc?export=download&id=1iq_OSmvzxcnQMRUVHzl6rVgYlJtnsiw9',
            link: 'https://www.dropbox.com/scl/fi/hhgovrsn3w6xvnlveaexk/Gestion_Facturas.exe?rlkey=pay991wjt9iudilcuti2pp507&st=pujh01i4&dl=1',
            
            linkType: t("projects.download"),
            git: 'https://github.com/Sofiaggb/APP_facturas',
            technologies: [
                { icon: <FaPython />, },
                { icon: <div className='h-5 w-5'> <Custom /></div>, },
                { icon: <GrMysql />, },
            ]
        },
        {
            title: t("projects.service"),
            description: t("projects.descriptionService"),
            image: servicios,
            link: 'https://usabuildersllc.com/',
            // git: 'https://github.com/Sofiaggb/usabuilders',
            technologies: [
                { icon: <TbBrandHtml5 />, },
                { icon: <TbBrandCss3 />, },
                { icon: <FaReact />, },
                { icon: <TbBrandJavascript />, }
            ]
        },
        {
            title: t("projects.caipa"),
            description: t("projects.descriptionCaipa"),
            image: informativa,
            link: 'https://sofiaggb.github.io/CAIPA/',
            git: 'https://github.com/Sofiaggb/CAIPA',
            technologies: [
                { icon: <TbBrandHtml5 />, },
                { icon: <TbBrandCss3 />, },
                { icon: <TbBrandJavascript />, },
            ]
        },
        {
            title: t("projects.amazonCopy"),
            description: t("projects.descriptionAmazonCopy"),
            image: amazonCopy,
            link: 'https://sofiaggb.github.io/AmazonCopy/',
            git: 'https://github.com/Sofiaggb/AmazonCopy',
            technologies: [
                { icon: <TbBrandHtml5 />, },
                { icon: <TbBrandCss3 />, },
                { icon: <FaReact />, },
                { icon: <TbBrandJavascript />, }
            ]
        },
        {
            title: t("projects.bazaar"),
            description: t("projects.descriptionBazaar"),
            image: bazaar,
            link: 'https://mascotas-bazar.onrender.com/',
            git: 'https://github.com/Sofiaggb/mascotas_bazar',
            technologies: [
                { icon: <TbBrandHtml5 />, },
                { icon: <TbBrandCss3 />, },
                { icon: <FaReact />, },
                { icon: <TbBrandJavascript />, },
                { icon: <FaNode />, },
                { icon: <SiJavascript />, },]
        },
    ];

    return (
        <>
            {proyectos.map((proyecto, i) => (

                <div key={i} className="flex flex-col m-6 text-center max-[400px]:w-11/12 
                items-center rounded overflow-hidden ">

                    <img className="w-full  h-52 max-md:h-72 max-[550px]:h-60
                         max-[470px]:h-56 max-[400px]:h-48  max-[550px]:object-fill 
                         rounded border border-zinc-700 hover:border-red-300 
                         object-cover"
                        src={proyecto.image} alt={proyecto.title} />

                    <div className='flex flex-wrap w-full float-left '>
                        {proyecto.technologies.map((item, index) => (
                            <div key={index} className="flex py-1 px-2 my-2 mx-1 rounded-md
                            border border-cyan-700 text-xl">
                                {item.icon}
                            </div>
                        ))}
                    </div>

                    <div className="px-6 pb-4 ">
                        <div className="font-bold text-xl mb-2">{proyecto.title}</div>
                        <p className=" text-sm max-lg:w-96 max-[450px]:w-11/12 text-left">
                            {proyecto.description}
                        </p>
                    </div>
                    <div className='flex'>

                        {proyecto.linkType ?
                            <a href={proyecto.link}
                                className="flex mx-3 rounded border border-rose bg-rose px-3 py-2
                         text-sm font-medium  hover:bg-transparent 
                          hover:text-rose focus:outline-none focus:ring 
                          active:text-rose">
                                <FaArrowAltCircleDown className='text-2xl m-auto' />
                                <p className='m-auto ml-1' >{proyecto.linkType}</p>
                            </a>
                            :
                            <a href={proyecto.link} target="_blank" rel="noopener noreferrer"
                                className="flex mx-3 rounded border border-rose bg-rose px-6 py-2
                         text-sm font-medium  hover:bg-transparent 
                          hover:text-rose focus:outline-none focus:ring 
                          active:text-rose">
                                <FaEye className='text-2xl m-auto' />
                                <p className='m-auto ml-1' >{t("projects.view")}</p>
                            </a>
                        }

                        {proyecto.git &&

                            <a
                                className="flex mx-3 rounded border border-gray-500 bg-gray-500 px-6 py-1
                         text-sm font-medium text-white hover:bg-transparent
                          hover:text-gray-500 focus:outline-none focus:ring 
                          active:text-rose"
                                href={proyecto.git} target="_blank" rel="noopener noreferrer"
                            >
                                <i className='bx bx-code-alt text-2xl' ></i>
                                <p className='m-auto ml-1' >{t("projects.code")}</p>
                            </a>
                        }
                    </div>
                </div >

            ))
            }

        </>
    )
}
