"use client";

import React from 'react';
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 1,
                }}
                animate={{
                    opacity: isInView ? 1 : 0,
                    scale: 1
                }}
                transition={{
                    type: "spring",
                    duration: 3,
                }}
            >
                {children}
            </motion.div>
        </section>
    );
}

const ContactMe = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        window.location.href = `mailto:jourdancatarina3@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message}`
    };

    return (
        <div id='contact' className='flex flex-col text-center md:text-left lg:flex-col max-w-7xl lg:px-10 lg:mx-auto items-center'>
            <Section>
                <h1 className='lg:text-8xl glow text-5xl text-center font-monoton tracking-widest '>
                    Contact
                </h1>
            </Section>

            <div className='lg:w-full w-10/12 flex justify-center'>
            <div className='mt-10 flex flex-col'>
                <Section>
                    <h1 className=' font-semibold text-3xl'>
                        I have got just what you need. Let's Talk.
                    </h1>
                </Section>

                <Section>
                    <div className='space-y-3 mt-10'>
                        <div className='flex items-center space-x-3 justify-center'>
                            <FontAwesomeIcon icon={faPhone} width={17} height={17} />
                            <p>+639158412685</p>
                        </div>

                        <div className='flex items-center space-x-3 justify-center'>
                            <FontAwesomeIcon icon={faEnvelope} width={17} height={17} />
                            <p>jourdancatarina3@gmail.com</p>
                        </div>

                        <div className='flex items-center space-x-3 justify-center'>
                            <FontAwesomeIcon icon={faLocationDot} width={17} height={17} />
                            <p>Basak-Pardo Cebu City, Cebu, Philippines</p>
                        </div>
                    </div>
                </Section>

                <Section>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex mt-3 flex-col space-y-2 w-fit mx-auto'>
                        <div className='flex space-x-2'>
                            <input {...register('name')} placeholder='Name' className='contactInput' type='text' />
                            <input {...register('email')} placeholder='Email' className='contactInput' type='email' />
                        </div>

                        <input {...register('subject')} placeholder='Subject' className='contactInput' type='text' />

                        <textarea {...register('message')} placeholder='Message' className='contactInput'></textarea>
                        <button type='submit' className='neon-glow py-5 px-10 rounded-md text-white font-bold text-lg'>Submit</button>
                    </form>
                </Section>
            </div>
            </div>
        </div>
    )
}

export default ContactMe