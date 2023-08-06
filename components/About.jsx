import React from 'react'
import { useRef } from "react";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";

function Section({ children }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section ref={ref}>
            <motion.div
                initial={{
                    y: 500,
                    opacity: 0,
                    scale: 1,
                }}
                animate={{
                    y: isInView ? 0 : 500,
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

const About = () => {
    return (
        <div id='about'>
            <div className='w-full'>
                <Section>
                    <h1 className='lg:text-8xl glow text-5xl text-center font-monoton tracking-widest '>Experience</h1>
                </Section>
                <Section>
                    <div className='mt-10 flex justify-center'>
                        <div className='flex flex-col text-start px-10 lg:px-0 md:w-2/3 lg:w-1/3'>
                            <h1 className=' font-semibold text-3xl'>Frontend Developer</h1>
                            <h1 className=' font-semibold text-2xl'>Mind Fusion Ltd</h1>
                            <p className=' font-thin text-lg'>October, 2021 - May, 2022</p>
                            <p className=' text-xl font-light'>
                                Built a fully functioning website that reviews software products. Worked alone on the website's entire front-end development. Designed and optimized some of the pages on the website using Figma. Discussed site and app requirements with clients to produce actionable development plans.
                            </p>
                        </div>
                    </div>
                </Section>
            </div>

            <div className='h-32' />

            <div className='w-full'>
                <Section>
                    <h1 className='lg:text-8xl text-5xl text-center font-monoton glow tracking-widest '>Education</h1>
                </Section>
                <div className='mt-10 flex justify-center'>
                    <div className='flex flex-col text-start px-10 lg:px-0 md:w-2/3 lg:w-1/3'>
                        <Section>
                            <div>
                                <h1 className=' font-semibold text-3xl'>Cebu City National Science High School</h1>
                                <p className=' font-thin text-lg'>2016 - 2022</p>
                                <p className=' text-xl font-light'>
                                    Consistent With Honors Student from Grade 7 to Grade 10. With High Honors from Grade 11 to Grade 12.
                                </p>
                            </div>
                        </Section>
                        <Section>
                            <div className='mt-10'>
                                <h1 className=' font-semibold text-3xl'>University of the Philippines - Cebu</h1>
                                <p className=' font-thin text-lg'>2022 - Present</p>
                                <p className=' text-xl font-light'>
                                    First Semester - University Scholar
                                    <br />Second Semester - University Scholar
                                </p>
                            </div>
                        </Section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About