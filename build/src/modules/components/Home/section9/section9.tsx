import { Button } from '@/modules/core/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Section9 = () => {
  const items = [
    { id: 1, title: "Quienes somos" },
    { id: 2, title: "Términos y condiciones" },
    { id: 3, title: "Berrysafe promise" },
    { id: 4, title: "Contacto" },
    { id: 5, title: "Preguntas frecuentes" },
  ]
  return (
    <div className='section section-9'>
      <div className='container'>
        <div className="box">
          <h1 className="h1 text-gradient">
            Berrysafe Promise
          </h1>
          <p className="body-regular">
            En Berrysafe nos aseguramos que todo sea transparente y seguro para los involucrados en la industria de seguros
          </p>
          <Button className='button button-border'>Leer Berrysafe Promise</Button>
        </div>
        <div className="box box-rtl">
          <Image src='/berry blob.png' alt='back' className='back' width={324} height={233} />
          <Image src='/berryLock.png' alt='Lock' className='Lock' width={171} height={265} />
        </div>
      </div>
      <div className='cont'>
        <div className='items'>
          {items.map((item) => (
            <Link key={item.id} href='./' className='button button-link'>
              {item.title}
              <span className='divider'>|</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
