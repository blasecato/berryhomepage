import React from 'react'
import { CardSlide } from './cardSlide'

export const Section8 = () => {
  const cards = [
    {
      id: 1,
      title: 'PIAApay Dashboard',
      text: 'PIAApay organiza todas tus pólizas con ofertas de las aseguradoras para que puedas cotizar y ganarte un ingreso extra. Recibes ofertas para cotizar con aseguradoras que te ofrecen un incentivo y beneficios en PIAApay por tus cotizaciones y en el Dashboard tienes a simple vista tu saldo actual, cuantas ofertas tienes por aceptar, y cuanto has ganado.',
      image: "/movil1.png"
    },
    {
      id: 2,
      title: 'PIAApay Ofertas',
      text: 'PIAApay analiza las aseguradoras que conectas con PIAA powered by Berrysafe y te muestra las pólizas que traen interés de parte de la aseguradoras para que puedas cotizarlas y asi tener un ingreso adicional. Dar retroalimentación a la aseguradora que oferta también es parte del proceso y ayuda a la aseguradora a saber porque gana o pierde la cotización.',
      image: "/movil2.png"
    }
  ]
  return (
    <div className='section section-8'>
      <div className='container'>
        <div className='box-rth'>
          {cards?.map((item) => (
            <CardSlide
              key={`card-item-${item.id}`}
              image={item.image}
              text={item.text}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
