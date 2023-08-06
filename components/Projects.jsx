import React from 'react';
import { useRef } from "react";
import Image from 'next/image';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from 'next/link';

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

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    return (
        <div className="flex justify-center" id="projects">
            <div className='lg:w-10/12 w-11/12'>
                <Section>
                    <h1 className='lg:text-8xl glow text-5xl text-center font-monoton tracking-widest '>Projects</h1>
                </Section>
                <div className='flex justify-center'>
                    <div className='flex flex-col'>
                        <Section>
                            <div className='flex justify-center mt-10'>
                                <div className='w-full md:w-3/4 lg:w-full relative'>
                                    <div className='absolute -right-2.5 -bottom-2.5 neon-glow h-full w-full rounded-2xl'>
                                    </div>
                                    <div className='relative bg-white p-3 md:p-10 lg:px-16 lg:py-20 rounded-2xl flex w-full'>
                                        <div className='flex flex-col lg:flex-row items-center'>
                                            <div className='rounded-xl overflow-hidden cursor-pointer'>
                                                <Link href="https://carhub-jrdn-sr8p.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                    <Image className='transform duration-300 hover:scale-105' src="/carhub-pic.png" width={495} height={270} />
                                                </Link>
                                            </div>
                                            <div className='lg:ml-5 lg:w-1/2'>
                                                <Link href="https://carhub-jrdn-sr8p.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-4xl font-bold hover:underline cursor-pointer' style={{ color: '#0a0141' }}>CarHub</Link>
                                                <h1 className='text-2xl font-semibold' style={{ color: '#0a0141' }}>Car Renting Application</h1>
                                                <div className='flex items-center'>
                                                    <FontAwesomeIcon className='mt-2' icon={faLayerGroup} width={23} height={23} style={{ color: '#0a0141' }} />
                                                    <h1 className='mt-2 mx-3 text-xl' style={{ color: '#0a0141' }}>REACT NEXTJS TYPESCRIPT TAILWIND</h1>
                                                </div>
                                                <p className='text-xl mt-3' style={{ color: '#0a0141' }}>Discover a wide selection of vehicles from trusted providers at competitive rates. From compact cars to luxurious sedans and spacious SUVs, all available on our user-friendly website.</p>
                                                <div className='flex justify-between lg:justify-normal mt-3'>
                                                    <Link href="https://github.com/jourdancatarina3/carhub-jrdn" target="_blank" rel="noopener noreferrer">
                                                        <Image className='bg-white rounded-full cursor-pointer lg:mx-5' src="/github-logo.png" width={45} height={45} />
                                                    </Link>
                                                    <button className='rounded-xl px-4 lg:px-6 py-1.5 m-2 lg:m-0' style={{ backgroundColor: '#0a0141' }}>
                                                        <Link href="https://carhub-jrdn-sr8p.vercel.app/" target="_blank" rel="noopener noreferrer" className=' text-xl font-medium'>
                                                            Visit Project
                                                        </Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section>
                            <div className='flex justify-center mt-20 lg:mt-36'>
                                <div className='w-full md:w-3/4 lg:w-full relative'>
                                    <div className='absolute -right-2.5 -bottom-2.5 neon-glow h-full w-full rounded-2xl'>
                                    </div>
                                    <div className='relative bg-white p-3 md:p-10 lg:px-16 lg:py-20 rounded-2xl flex w-full'>
                                        <div className='flex flex-col lg:flex-row items-center'>
                                            <div className='rounded-xl overflow-hidden cursor-pointer'>
                                                <Link href="https://promptopia-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                    <Image className='transform duration-300 hover:scale-105' src="/promptopia-pic.png" width={495} height={270} />
                                                </Link>
                                            </div>
                                            <div className='lg:ml-5 lg:w-1/2'>
                                                <Link href="https://promptopia-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-4xl font-bold hover:underline cursor-pointer' style={{ color: '#0a0141' }}>Promptopia</Link>
                                                <h1 className='text-2xl font-semibold' style={{ color: '#0a0141' }}>Share AI-Powered Prompts</h1>
                                                <div className='flex items-center'>
                                                    <FontAwesomeIcon className='mt-2' icon={faLayerGroup} width={23} height={23} style={{ color: '#0a0141' }} />
                                                    <h1 className='mt-2 mx-3 text-xl' style={{ color: '#0a0141' }}>REACT NEXTJS TAILWIND MONGODB</h1>
                                                </div>
                                                <p className='text-xl mt-3' style={{ color: '#0a0141' }}>Discover & Share AI-Powered Prompts. Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts.</p>
                                                <div className='flex justify-between lg:justify-normal mt-3'>
                                                    <Link href="https://github.com/jourdancatarina3/promptopia-jrdn" target="_blank" rel="noopener noreferrer">
                                                        <Image className='bg-white rounded-full cursor-pointer lg:mx-5' src="/github-logo.png" width={45} height={45} />
                                                    </Link>
                                                    <button className='rounded-xl px-4 lg:px-6 py-1.5 m-2 lg:m-0' style={{ backgroundColor: '#0a0141' }}>
                                                        <Link href="https://promptopia-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-xl font-medium'>
                                                            Visit Project
                                                        </Link>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>

                <Section>
                    <h1 ref={ref} className='lg:hidden md:block block mt-20 lg:mt-28 mb-5 text-2xl text-center font-monoton tracking-widest '>Frontend-Only Projects</h1>
                </Section>
                <div className='flex justify-center'>
                    <div className='lg:hidden md:block block flex-col lg:flex-row'>
                        <Section>
                            <div
                                className="relative"
                            >
                                <div className='absolute -right-2.5 -bottom-2.5 neon-glow h-full w-full rounded-2xl'>
                                </div>
                                <div className='relative bg-white rounded-2xl w-full'>
                                    <div className='flex p-3 md:p-6 flex-col'>
                                        <div className='rounded-xl overflow-hidden cursor-pointer'>
                                            <Link href="https://restaurant-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                <Image className='transform duration-300 hover:scale-105' src="/restaurant.png" width={495} height={270} />
                                            </Link>
                                        </div>
                                        <div className='w-full'>
                                            <Link href="https://restaurant-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" ref={ref} className='text-4xl font-bold my-3 hover:underline cursor-pointer' style={{ color: '#0a0141' }}>Restaurant Site</Link>
                                            <div className='flex items-center'>
                                                <FontAwesomeIcon className='mt-2' icon={faLayerGroup} width={23} height={23} style={{ color: '#0a0141' }} />
                                                <h1 className='mt-2 mx-3 text-xl' style={{ color: '#0a0141' }}>REACT HTML CSS</h1>
                                            </div>
                                            <div className='flex mt-5 justify-between'>
                                                <Link href="https://github.com/jourdancatarina3/restaurant-app" target="_blank" rel="noopener noreferrer">
                                                    <Image className='bg-white rounded-full cursor-pointer' src="/github-logo.png" width={35} height={35} />
                                                </Link>
                                                <Link href="https://restaurant-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-xl font-medium underline cursor-pointer' style={{ color: '#0a0141' }}>
                                                    Visit Project
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <div className='h-10 lg:h-0 lg:w-10' />
                        <Section>
                            <div
                                className="lg:w-1/2 relative"
                            >
                                <div className='absolute -right-2.5 -bottom-2.5 neon-glow h-full w-full rounded-2xl'>
                                </div>
                                <div className='relative bg-white rounded-2xl w-full'>
                                    <div className='flex p-3 md:p-6 flex-col'>
                                        <div className='rounded-xl overflow-hidden cursor-pointer'>
                                            <Link href="https://gpt3-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer">
                                                <Image className='transform duration-300 hover:scale-105' src="/openai.png" width={495} height={270} />
                                            </Link>
                                        </div>
                                        <div className='w-full'>
                                            <Link href="https://gpt3-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" ref={ref} className='text-4xl font-bold my-3 hover:underline cursor-pointer' style={{ color: '#0a0141' }}>GPT3 - OpenAI site</Link>
                                            <div className='flex items-center'>
                                                <FontAwesomeIcon className='mt-2' icon={faLayerGroup} width={23} height={23} style={{ color: '#0a0141' }} />
                                                <h1 className='mt-2 mx-3 text-xl' style={{ color: '#0a0141' }}>REACT HTML CSS</h1>
                                            </div>
                                            <div className='flex mt-5 justify-between'>
                                                <Link href="https://github.com/jourdancatarina3/gpt3-jrdn" target="_blank" rel="noopener noreferrer">
                                                    <Image className='bg-white rounded-full cursor-pointer' src="/github-logo.png" width={35} height={35} />
                                                </Link>
                                                <Link href="https://gpt3-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-xl font-medium underline cursor-pointer' style={{ color: '#0a0141' }}>
                                                    Visit Project
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Section>
                    </div>
                </div>

                <div className='hidden lg:block'>
                    <motion.div
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: isInView ? 1 : 0,
                        }}
                        transition={{
                            duration: 2,
                        }}
                    >
                        <h1 ref={ref} className='lg:text-5xl mt-20 lg:mt-28 mb-5 text-2xl text-center font-monoton tracking-widest '>Frontend-Only Projects</h1>
                    </motion.div>

                    <div className='flex flex-col lg:flex-row'>
                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{
                                x: -500,
                                opacity: 0,
                                scale: 1,
                            }}
                            animate={{
                                x: isInView ? 0 : -500,
                                opacity: isInView ? 1 : 0,
                                scale: 1
                            }}
                            transition={{
                                type: "spring",
                                duration: 2.5,
                            }}
                        >
                            <div className='absolute -right-2.5 -bottom-2.5 neon-glow h-full w-full rounded-2xl'>
                            </div>
                            <div className='relative bg-white rounded-2xl w-full'>
                                <div className='flex p-6 flex-col'>
                                    <div className='rounded-xl overflow-hidden cursor-pointer'>
                                        <Link href="https://restaurant-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            <Image className='transform duration-300 hover:scale-105' src="/restaurant.png" width={495} height={270} />
                                        </Link>
                                    </div>
                                    <div className='w-full'>
                                        <Link href="https://restaurant-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" ref={ref} className='text-4xl font-bold my-3 hover:underline cursor-pointer' style={{ color: '#0a0141' }}>Restaurant Site</Link>
                                        <div className='flex items-center'>
                                            <FontAwesomeIcon className='mt-2' icon={faLayerGroup} width={23} height={23} style={{ color: '#0a0141' }} />
                                            <h1 className='mt-2 mx-3 text-xl' style={{ color: '#0a0141' }}>REACT HTML CSS</h1>
                                        </div>
                                        <div className='flex mt-5 justify-between'>
                                            <Image className='bg-white rounded-full cursor-pointer' src="/github-logo.png" width={35} height={35} />
                                            <Link href="https://restaurant-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-xl font-medium underline cursor-pointer' style={{ color: '#0a0141' }}>
                                                Visit Project
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className='h-10 lg:h-0 lg:w-10' />

                        <motion.div
                            className="lg:w-1/2 relative"
                            initial={{
                                x: 500,
                                opacity: 0,
                                scale: 1,
                            }}
                            animate={{
                                x: isInView ? 0 : 500,
                                opacity: isInView ? 1 : 0,
                                scale: 1
                            }}
                            transition={{
                                type: "spring",
                                duration: 2.5,
                            }}
                        >
                            <div className='absolute -right-2.5 -bottom-2.5 neon-glow h-full w-full rounded-2xl'>
                            </div>
                            <div className='relative bg-white rounded-2xl w-full'>
                                <div className='flex p-6 flex-col'>
                                    <div className='rounded-xl overflow-hidden cursor-pointer'>
                                        <Link href="https://gpt3-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer">
                                            <Image className='transform duration-300 hover:scale-105' src="/openai.png" width={495} height={270} />
                                        </Link>
                                    </div>
                                    <div className='w-full'>
                                        <Link href="https://gpt3-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" ref={ref} className='text-4xl font-bold my-3 hover:underline cursor-pointer' style={{ color: '#0a0141' }}>GPT3 - OpenAI site</Link>
                                        <div className='flex items-center'>
                                            <FontAwesomeIcon className='mt-2' icon={faLayerGroup} width={23} height={23} style={{ color: '#0a0141' }} />
                                            <h1 className='mt-2 mx-3 text-xl' style={{ color: '#0a0141' }}>REACT HTML CSS</h1>
                                        </div>
                                        <div className='flex mt-5 justify-between'>
                                            <Image className='bg-white rounded-full cursor-pointer' src="/github-logo.png" width={35} height={35} />
                                            <Link href="https://gpt3-jrdn.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-xl font-medium underline cursor-pointer' style={{ color: '#0a0141' }}>
                                                Visit Project
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className='h-32' />
        </div>
    )
}

export default Projects;
