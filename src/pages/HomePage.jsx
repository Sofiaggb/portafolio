import sofia from '../assets/images/sofia.png'
import CardsTecnologias from '../components/cardsTecnologias'
import CardsProyects from '../components/CardsProyects'
import Footer from '../components/Footer'

export default function HomePage() {
    return (
        <>
            <div className="md:flex items-center justify-center h-screen max-[400px]:mb-24">
                <div className=" max-md:m-auto max-md:mt-12 max-md:mb-6 relative w-80 lg:w-96 h-72 md:h-80 rose  rounded-t-full">
                    <img src={sofia} alt="Sofía Gaitán" className="absolute  bottom-0 right-0 w-64 md:w-72 object-cover" />
                </div>

                <div className="max-md:m-auto relative w-4/5 md:w-72 md:m-11 lg:m-24 items-center max-md:text-center justify-center">
                    <h1 className="text-7xl font-moserrat">Sofia Gaitán</h1>
                    <h2 className="text-base font-mono my-4 ">WEB DEVELOPER</h2>
                    <p className="text-lg ">Soy una desarrolladora junior independiente enfocada en el desarrollo
                        de front-end y back-end utilizando React y Node.js.</p>

                </div>
            </div>

            <h1 className='text-5xl max-[400px]:text-4xl w-4/5 m-auto text-center font-moserrat my-5 max-md:mt-12 '>Tecnologías que manejo</h1>
            <div className="flex items-center justify-center container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 m-12 max-[400px]:mt-3 ">
                    <CardsTecnologias />
                </div>
        </div>

                <h1 className='text-5xl max-[400px]:text-4xl text-center font-moserrat'>Proyectos</h1>
                <div className=' w-4/5 m-auto mt-3 text-center'>
                    <p className="text-lg "> Estos son mis proyectos,
                    si deseas puedes acceder al código fuente.
                    </p>
                </div>
                <div className="flex items-center justify-center container mx-auto">
                    <div className="grid  grid-cols-1  lg:grid-cols-3  lg:m-4  ">
                        <CardsProyects />
                    </div>
                </div>

                <Footer />
            </>

            )
}
