import i18n from "i18next";
import { useState } from "react";
export default function Toggle() {
    const [currentLenguage, setCurrentLenguage] = useState(null);

     // cambiar el idioma al hacer clic en el botón
  const changeL= () => {
    setCurrentLenguage(i18n.language);
    console.log(currentLenguage)
    if (currentLenguage === "en") {
    i18n.changeLanguage("es");
    }else{
    i18n.changeLanguage("en");
}

  };

  return (
  <div className="sm:absolute top-0 right-4 my-8 max-sm:flex max-sm:justify-end max-sm:mr-6">
    <label htmlFor="toggle" onClick={() => (changeL())} className="flex items-center cursor-pointer">
      <input type="checkbox" id="toggle" className="sr-only peer" /> 
      <p className='font-moserrat font-bold mr-1'>EN</p>
      <div className="block relative bg-gray-300 w-16 h-9 p-1 rounded-full before:absolute before:bg-gray-600 
      before:w-7 before:h-7 before:p-1 before:rounded-full before:transition-all before:duration-500 before:left-1 
      peer-checked:before:left-8 peer-checked:before:bg-red-300 peer-checked:bg-gray-200"></div> 
      <p className='font-moserrat font-bold ml-1'>ES</p>
    </label>
  </div>
  )
}
