import sofia from '../assets/images/sofia.png'

export default function HomePage() {
    return (
        <>
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-96 h-80 rose  rounded-t-full">
            <img src={sofia} alt="Sofía Gaitán" className="absolute  bottom-0 right-0  w-72 object-cover" />
            </div>

            <div className=" relativew w-72 m-24 items-center justify-center">
                <h1 className="text-7xl font-moserrat">Sofia Gaitán</h1>
                <h2 className="text-base font-mono my-4 ">WEB DEVELOPER</h2>
                <p className="text-lg">Soy una desarrolladora junior independiente enfocada en el desarrollo
                 de front-end y back-end utilizando React y Node.js.</p>
            </div>
        </div>

        <h1 className='text-5xl text-center font-moserrat'>Tecnologías</h1>
        </>
    )
}
