import Image from 'next/image'
import React from 'react'

export const Section6 = () => {
  return (
    <div className='section section-6'>
      <div className="container">
        <div className="image">
          <Image
            src={'/agente-hoja.png'}
            height={621}
            width={897}
            alt='agent-leaf'
          />
        </div>
        <div className="blur">
          <p className="sub-title">
            Modelos innovadores que le le dan la posibilidad al agente de generar ingresos adicionales a partir del valor de su data no sensible
          </p>
        </div>
      </div>
    </div>
  )
}