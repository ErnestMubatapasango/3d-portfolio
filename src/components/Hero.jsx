import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas/Computers'

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[140px]  flex items-start max-w-7xl mx-auto gap-5 `}>
        {/**circle and line */}
        <div className='flex flex-col items-center justify-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        {/**circle and line */}
        <div className='-mt-2'>
            <h1 className={`${styles.heroHeadText} text-white`}>Hi, l'm <span className='text-[#915eff]'>Enerst </span></h1>
            <p className={`${styles.heroSubText} text-white`}>
              l develop websites, web<br className='sm:block hidden' /> 
              applications and graphic designs
            </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  )
}

export default Hero