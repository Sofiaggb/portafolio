import sofia from '../assets/images/sggb.png'
import CardsTecnologias from '../components/cardsTecnologias'
import CardsProyects from '../components/CardsProyects'
import Footer from '../components/Footer'
import Toggle from '../components/Toggle'

import { useTranslation } from 'react-i18next'
import About from '../components/AboutMe'
import Contact from '../components/Contact'

export default function HomePage() {
    const { t } = useTranslation()
    return (
        <>
            <Toggle />

            <div className="md:flex items-center justify-center md:h-screen max-md:mx-3 max-[400px]:mb-12">

                <div className=" max-md:m-auto max-md:mt-12 max-md:mb-6 relative w-80
                 lg:w-96 h-72 md:h-80 bg-rose  rounded-t-full">
                    {/* // className=" max-md:m-auto max-md:mt-12 max-md:mb-6 relative w-80 lg:w-96 h-72 md:h-80 rose  rounded-t-full"> */}
                    <img src={sofia} alt="Sofía Gaitán"
                        className="absolute  bottom-0 right-0 w-full object-cover" />
                </div>

                <div className="max-md:m-auto relative w-full md:w-2/4 md:ml-16 lg:m-6 
                            items-center  justify-center max-sm:mr-0">
                    <h1 className="max-sm:text-6xl text-7xl font-moserrat">Sofia Gaitán</h1>
                    <About />
                </div>
            </div>


            <h1 className='text-5xl max-[400px]:text-4xl w-4/5 m-auto text-center font-moserrat my-5 max-md:mt-12 '>
                {t("tecnologias.title")}</h1>
            <div className="flex items-center justify-center container mx-auto">
                {/* <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-5 m-12 max-[400px]:mt-3 "> */}
                <div className='flex flex-col justify-center'>
                    <CardsTecnologias />
                </div>
            </div>

            <h1 className='mt-10 text-5xl max-[400px]:text-4xl text-center font-moserrat'>
                {t("projects.title")}
            </h1>

            <div className="mt-4 flex items-center container mx-auto">
                <ul className="space-y-4">
                    <li className="flex flex-col gap-2  ">
                        <p className="flex items-center gap-2">
                            <span className="relative flex items-center">
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-300"></span>
                                <span className="ml-2"> {t("projects.currently")}</span>
                            </span>
                            <a  className=" font-semibold hover:text-blue-900 transition-colors duration-200 hover:underline underline-offset-2"
                                href="https://norteconecta.net/home/"
                                target="_blank"
                                rel="noopener noreferrer"  >
                              {t("projects.cablenorte")} 
                            </a>
                        </p>
                        <p className="text-gray-700 text-sm  ml-5">
                             {t("projects.cablenorteIDid")} 
                        </p>
                    </li>
                </ul>
            </div>


            <div className="flex items-center justify-center container mx-auto">
                <div className="grid  grid-cols-1  lg:grid-cols-3  lg:m-4  ">
                    <CardsProyects />
                </div>
            </div>

            <Contact />

            <Footer />
        </>

    )
}
