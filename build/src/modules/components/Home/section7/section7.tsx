import Image from 'next/image'
import React from 'react'
import Typewriter from "typewriter-effect";

export const Section7 = () => {
  return (
    <div className='section section-7'>
      <div className="container">
        <h1 className="h1">Conoce a PIAA</h1>
        <h2 className="h2">Nuestro Berrysafe Bot</h2>
        <Image
          src={'/arrow-curve.svg'}
          height={18}
          width={98}
          alt='arrow'
          className='arrow'
        />
        <div className="typewriter">
          <Typewriter
            options={{
              strings: ["(Portal inteligente de \nagentes y aseguradoras)"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
    </div>
  )
}
