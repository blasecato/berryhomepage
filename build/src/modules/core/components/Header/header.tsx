import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '@/modules/core/ui/button'

const Header = () => {
  return (
    <div className='Header'>
      <div className='container'>
        <div className="column">
          <a href='/'>
            <Image
              alt='Logo Berry'
              height={25}
              src={'/Logo.svg'}
              width={115}
            />
          </a>
          <div className="networks">
            <Link href='https://www.instagram.com/berrysafemx/?hl=es-la' rel="noopener noreferrer" target="_blank">
              <Image
                alt='logo'
                height={20}
                src={'/insta.svg'}
                width={20}
              />
            </Link>
            <Link href='https://www.linkedin.com/company/berrysafe/posts/?feedView=all' rel="noopener noreferrer" target="_blank">
              <Image
                alt='linkedin'
                height={20}
                src={'/Linkedin.svg'}
                width={20}
              />
            </Link>
            <Link href='https://web.facebook.com/BerrysafeCiudaddeMexicoMarcosZavalaDiaz' rel="noopener noreferrer" target="_blank">
              <Image
                alt='facebook'
                height={20}
                src={'/face.png'}
                width={20}
              />
            </Link>
          </div>
        </div>
        <Button variant={'link'}>Ingreso para Agentes</Button>
      </div>
    </div>
  )
}

export default Header