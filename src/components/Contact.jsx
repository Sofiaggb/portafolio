import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import Swal from "sweetalert2";

const Contact = () => {

    const {t} = useTranslation()

    const formRef = React.useRef();
    const nameRef = React.useRef();
    const emailRef = React.useRef();
    const messageRef = React.useRef();

    const [send, setSend] = useState(false)


    const valideSendEmail = () => {
        const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const isValidEmailValue = emailRef && emailRef.current?.value && !emailPattern.test(emailRef.current.value);
        const isValidName = nameRef && !nameRef.current?.value;
        const isValidEmail = emailRef && !emailRef.current?.value;
        const isValidMessage = messageRef && !messageRef.current?.value;

        if (isValidName) {
            Swal.fire({
                icon: 'warning',
                text: t("contact.invalidName"),
                confirmButtonColor: "#c494d6",
            });
            return send;
        } else if (isValidEmail) {
            Swal.fire({
                icon: 'warning',
                text: t("contact.invalidEmail"),
                confirmButtonColor: "#c494d6",
            });
            return send;
        } else if (isValidEmailValue) {
            Swal.fire({
                icon: 'warning',
                text: t("contact.isValidEmailValue"),
                confirmButtonColor: "#c494d6",
            });
            return send;
        } else if (isValidMessage) {
            Swal.fire({
                icon: 'warning',
                text: t("contact.invalidMessage"),
                confirmButtonColor: "#c494d6",
            });
            return send;
        }
        return setSend(true);
    }

    const sendEmail = (event) => {
        event.preventDefault();
        if (!valideSendEmail()) {
            const serviceId = import.meta.env.VITE_SEVICE_ID;
            const templateId = import.meta.env.VITE_TEMPLATE_ID;
            const apikey = import.meta.env.VITE_API_KEY;

            emailjs.sendForm(serviceId, templateId, formRef.current, apikey)
                .then(response => {
                    console.log(response);
                    // limpiar formulario
                    event.target.reset();
                    Swal.fire({
                        icon: 'success',
                        text: t("contact.emailSend"),
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch(error => {
                    console.error(error);
                    // Mostrar mensaje de error
                    Swal.fire({
                        icon: 'error',
                        text: t("contact.errorSendEmail"),
                        showConfirmButton: true
                    });
                });
        }

    }

    return (
        <div className="max-md:w-full max-md:mx-4 w-3/4 justify-center text-center m-auto">
            <h2 className='mt-12 mb-6 text-5xl  max-[400px]:text-4xl text-center font-moserrat'>
                {t("contact.title")}
            </h2>
            <form ref={formRef} onSubmit={sendEmail}>
                <div className="min-[500px]:flex mb-4 ">
                    <input ref={nameRef} type="text" placeholder={t("contact.name")} name="name"
                        className="w-full bg-stone-300 border 
                rounded-full py-2 px-4  max-[500px]:mb-4 min-[500px]:mr-4 focus:outline-none focus:border-stone-400" 
                required/>

                    <input ref={emailRef} type="text" placeholder="Email" name="email"
                        className="w-full bg-stone-300 border 
                rounded-full py-2 px-4 min-[500px]:ml-4 focus:outline-none focus:border-stone-400 "
                required />
                </div>
                <div className="mb-6">
                    <textarea ref={messageRef} type="text" placeholder={t("contact.message")} name="message"
                        className="w-full min-h-[60px] max-h-[200px] bg-stone-300 border 
                rounded-3xl py-2 px-4 focus:outline-none focus:border-stone-400 0" 
                required/>
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
                        {t("contact.send")}
                    </span>
                </button>
            </form>
        </div>
    )
}

export default Contact
