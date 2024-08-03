
const Contact = () => {
  return (
    <div className=" w-3/4 justify-center text-center m-auto">
         <h2 className='mt-12 mb-6 text-5xl max-[400px]:text-4xl text-center font-moserrat'>
         ¿Alguna pregunta?
         </h2>
        <form >
            <div className="flex mb-4 ">
                <input type="text" placeholder="Name" 
                className="w-full bg-stone-300 border 
                rounded-full py-2 px-4 mr-4 focus:outline-none focus:border-stone-400" />
                
                <input type="text" placeholder="Email" 
                className="w-full bg-stone-300 border 
                rounded-full py-2 px-4 ml-4 focus:outline-none focus:border-stone-400 " />
            </div>
            <div className="mb-6">
                <textarea type="text" placeholder="Message" 
                className="w-full min-h-[60px] max-h-[200px] bg-stone-300 border 
                rounded-3xl py-2 px-4 focus:outline-none focus:border-stone-400 0" />
            </div>
            
            <button type="submit" 
            className=" bg-blueTwo hover:bg-purple text-white font-bold 
            py-2 px-6 rounded-full focus:outline-none focus:shadow-outline">
                Login
            </button>
        </form>
    </div>
  )
}

export default Contact
