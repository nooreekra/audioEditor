import React from 'react'
import Typed from 'react-typed';
import { Button } from '../../UI/Button';
import classes from './home.module.scss'
const Hero = () => {
  return (
    <div className={classes.main}>
        <div className='max-w-[450px] ml-[96px] w-full h-screen mx-auto flex flex-col'>
            {/* <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p> */}
            <h3 className='md:text-[4rem] md:leading-[4rem] sm:text-[3rem] text-[2rem] md:py-6'>Open source cross-platform audio software {'  '}
            <Typed 
                // className='md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2'
                strings={['Fast', 'Smart', 'User-friendly']} 
                typeSpeed={120}
                backSpeed={140} 
                loop
                 />
                 <br />
            </h3>
            {/* <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Fast, flexible financing for</p>
                
            </div> */}
            <button className='bg-white w-[200px] rounded-md font-medium my-6 ml-6 py-3 text-black'>Get Started</button>
        </div>
    </div>  
  )
}

export default Hero