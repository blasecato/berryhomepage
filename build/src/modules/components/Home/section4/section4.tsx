import Image from 'next/image'
import React from 'react'

const Section4 = () => {
  return (
    <div className='section section-4'>
      <div className='container'>
        <div className='column column-img'>
          <Image
            src='/banner4.png'
            width={640}
            height={738}
            alt='banner'
            className='img-banner'
          />
        </div>
        <div className='column column-text'>
          <h4 className='sub-title'>
            Tecnología que empodera a los agentes para mejorar la administración de su cartera y su productividad, centralizando y actualizando en tiempo real la información de todas las pólizas, recibos y comisiones de las diferentes aseguradoras con las que trabaja
          </h4>
        </div>
      </div>
    </div>
  )
}

export default Section4