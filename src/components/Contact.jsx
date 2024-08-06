
const Contact = () => {
    return (
        <div className="max-md:w-full max-md:mx-4 w-3/4 justify-center text-center m-auto">
            <h2 className='mt-12 mb-6 text-5xl  max-[400px]:text-4xl text-center font-moserrat'>
                ¿Alguna pregunta?
            </h2>
            <form >
                <div className="min-[500px]:flex mb-4 ">
                    <input type="text" placeholder="Name"
                        className="w-full bg-stone-300 border 
                rounded-full py-2 px-4  max-[500px]:mb-4 min-[500px]:mr-4 focus:outline-none focus:border-stone-400" />

                    <input type="text" placeholder="Email"
                        className="w-full bg-stone-300 border 
                rounded-full py-2 px-4 min-[500px]:ml-4 focus:outline-none focus:border-stone-400 " />
                </div>
                <div className="mb-6">
                    <textarea type="text" placeholder="Message"
                        className="w-full min-h-[60px] max-h-[200px] bg-stone-300 border 
                rounded-3xl py-2 px-4 focus:outline-none focus:border-stone-400 0" />
                </div>

                <button type="submit"
                    className="group relative rounded-full inline-block overflow-hidden border
                     border-blueTwo px-8 py-3 focus:outline-none focus:ring"
                >
                    <span
                        className="absolute inset-y-0 left-0 w-0 bg-blueTwo
                        transition-all group-hover:w-full group-active:bg-blueTwo"
                    ></span>
                    <span
                        className="relative text-base font-medium text-blueTwo
                        transition-colors group-hover:text-white"
                    >
                        Enviar
                    </span>
                </button>
            </form>
        </div>
    )
}

export default Contact
