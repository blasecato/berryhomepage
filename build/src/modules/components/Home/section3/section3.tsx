/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from '@/modules/core/ui/button'
import { Switch } from '@/modules/core/ui/switch'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

interface Props {
  currentSection: number
}

const Section3 = ({ currentSection }: Props) => {
  const [isCheck, setCheck] = useState<boolean>(false)
  const listItems = [
    { id: 1, text: 'Agentes' },
    { id: 2, text: 'Aseguradoras' },
    { id: 3, text: 'Promotorias' },
    { id: 4, text: 'Clientes' }
  ]
  const onChangeSwitch = (e: any) => {
    setCheck(e);
  }

  useEffect(() => {
    if (currentSection === 4) {
      setCheck(true);
    } else {
      setCheck(false);
    }
  }, [currentSection])

  return (
    <div className='section section-3'>
      <div className='container'>
        <div className='column column-text'>
        </div>
        <div className='column column-card'>
          <div className='card'>
            <Image
              src={'/Group.svg'}
              height={47}
              width={105}
              alt='insurers'
              className='insurers'
            />
            <h2 className='h2'>
              Generamos eficiencias con inteligencia artificial y otras tecnologías de punta,
            </h2>
            <p className="body-regular">
              Integrando sistemas que permanecían desconectados, desbloqueando así el valor presente en el libro de negocio de los agente:
            </p>
            <div className='items'>
              {listItems?.map((item) => (
                <div className='items-card' key={item.id}>
                  <Switch
                    checked={isCheck}
                    onCheckedChange={(e) => onChangeSwitch(e)}
                  />
                  <span className='body-bold'>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
            <Button className='circle-ray flex-center'>
              <Image
                src='/rayo.png'
                width={24}
                height={39}
                alt='ray'
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section3