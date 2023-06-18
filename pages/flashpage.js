import Link from 'next/link'
import React from 'react'
import style from '../styles/flash.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

function flashpage() {
  return (
    <section className={style.flash}>
        <img src='bg1.png' className={style.img1}/>
        <img src='bg2.png' className={style.img2}/>
        <img src='bg3.png' className={style.img3}/>
        <div className="logo">
          <img src='VENO.png' alt='logo'/>
          <p>welcome back</p>
        </div>
        <div className='btn'>
          <button type='button ' className="pur flex-sb">
            <img src='btnbg1.png' className="img" />
            <img src='btnbg2.png' className="img" />
            <Link href= '/signin' className='half flex-sb'>
              <p>Sign in</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>  
          </button>
          <button type='button' >
            <Link href= '/signup' className='half flex-sb'>
              <p>Sign up</p>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </button>
        </div>
      </section>
  )
}

export default flashpage