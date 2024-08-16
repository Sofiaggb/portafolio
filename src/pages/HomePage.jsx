import sofia from '../assets/images/sofia.png'
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
                    className="absolute  bottom-0 right-0 w-64 md:w-72 object-cover" />
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

            <h1 className='mt-12 text-5xl max-[400px]:text-4xl text-center font-moserrat'>
                {t("projects.title")}
            </h1>

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
