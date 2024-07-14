import React from 'react'
import Container from '../container'

interface Props {}

function Hero({}: Props) {
  return (
    <Container>
      <div className='text-center h-96 grid place-content-center'>
        <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
          Hello, I am Sarah
        </h1>
        <p className='mt-6 text-lg leading-8 text-gray-600 max-w-md'>
          I will teach you how to build a modern website, with a focus on
          accessibility and performance.
        </p>
      </div>
    </Container>
  )
}

export default Hero
