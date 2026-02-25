'use client'

import Image from 'next/image'
import React from 'react'

const ErrorHomePage = () => {
  return (
    <div className='p-4  w-full mt-4 flex justify-center items-center flex-col'>
      <h1 className='font-bold text-3xl mt-25'>An Error Occurred</h1>
      <Image src='/error.jpg' width={500} height={500} alt='pokemon not found' ></Image>
    </div>
  )
}

export default ErrorHomePage