"use client";

import { useRef } from "react";
import About from '@/components/About';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import Image from 'next/image';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContactMe from '@/components/ContactMe';
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import Link from "next/link";

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
          duration: 1,
        }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export default function Home() {
  const handleDownload = () => {
    const pdfUrl = '/JourdanCatarinaResume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank';
    link.download = 'JourdanCatarinaResume.pdf';
    link.click();
  };

  return (
    <main className='bg-fixed w-full bg-cover bg-center min-h-screen' style={{ backgroundImage: "url('/homepage-bg.jpg')" }}>
      <div className="relative flex flex-col h-full w-full overflow-x-hidden max-w-7xl m-auto">
        <Header />

        <motion.div
          initial={{
            x: 0,
            opacity: 0,
            scale: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1
          }}
          transition={{
            type: "spring",
            duration: 1.3,
          }}
        >
          <div className='w-full flex lg:flex-row md:flex-row flex-col px-5 lg:px-10 xl:px-20 items-center justify-center lg:justify-between'>
            <div className="w-5/6 md:w-1/3 lg:w-1/2">
              <Image src="/profile.png" width={396.75} height={561.25} />
            </div>
            <div className='w-full md:w-2/3 lg:w-1/2'>
              <div className='flex flex-col'>
                <h1 className='text-center lg:text-start text-5xl lg:text-7xl  font-bold'>Turning Ideas And Designs Into Reality.</h1>
                <p className=' text-center lg:text-start text-lg lg:text-xl mt-4 lg:mt-8'>As a dedicated full-stack developer, my objective revolves around constructing web applications from initial designs and imaginative concepts. Explore my recent projects showcasing my abilities and proficiency in React.js and web development.</p>
                <div className='mt-5 flex flex-wrap justify-center lg:justify-start'>
                  <button onClick={handleDownload}>
                  <motion.div
                    className='bg-white flex items-center cursor-pointer border-white border-solid border-4 rounded-2xl py-px px-4 lg:px-6 lg:py-1.5 m-2 lg:m-0'
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <h1 className='text-indigo-950 text-2xl font-semibold'>
                      Resume
                    </h1>
                    <FontAwesomeIcon className='text-indigo-950 ml-2' icon={faArrowUpRightFromSquare} width={19} height={19} />
                  </motion.div>
                  </button>

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href="https://github.com/jourdancatarina3" target="_blank" rel="noopener noreferrer">
                      <Image className='rounded-full cursor-pointer mx-5' src="/github.png" width={50} height={50} />
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <Link href="https://www.linkedin.com/in/jourdan-catarina-606485241/" target="_blank" rel="noopener noreferrer">
                      <Image src="/linkedin-logo.png" className='cursor-pointer' width={50} height={50} />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='h-16' />

        <Section>
          <div className='w-full'>
            <div className='flex justify-center'>
              <div className='bg-white p-1.5 rounded-xl mt-5 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5'>
                <div className='w-44 rounded-xl h-16 flex items-center' style={{ backgroundColor: '#0a0141' }}>
                  <Image src="/reacto-logo.png" width={75} height={75} />
                  <h1 className=' text-xl'>React</h1>
                </div>
                <div className='w-44 rounded-xl h-16 flex items-center' style={{ backgroundColor: '#0a0141' }}>
                  <Image src="/js-logo.png" width={75} height={75} />
                  <h1 className=' text-xl'>Javascript</h1>
                </div>
                <div className='w-44 rounded-xl h-16 flex items-center' style={{ backgroundColor: '#0a0141' }}>
                  <div className='mx-2'>
                    <Image className='bg-white rounded px-1' src="/next-logo.png" width={75} height={75} />
                  </div>
                  <h1 className=' text-xl'>NEXT.js</h1>
                </div>
                <div className='w-44 rounded-xl h-16 flex items-center' style={{ backgroundColor: '#0a0141' }}>
                  <Image className='mx-3' src="/node-logo.png" width={45} height={45} />
                  <h1 className=' text-xl'>NodeJS</h1>
                </div>
                <div className='w-44 rounded-xl h-16 flex items-center' style={{ backgroundColor: '#0a0141' }}>
                  <Image className='mx-3' src="/tailwind-logo.png" width={50} height={50} />
                  <h1 className=' text-xl'>Tailwind</h1>
                </div>
                <div className='w-44 rounded-xl h-16 flex items-center' style={{ backgroundColor: '#0a0141' }}>
                  <Image className='mx-3' src="/figma-logo.png" width={50} height={50} />
                  <h1 className=' text-xl'>Figma</h1>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <div className='h-32' />
        <Projects />

        <div className='h-32' />
        <About />
        <div className='h-32' />

        <ContactMe />
        <div className='h-10' />

      </div>
    </main>
  );
}
