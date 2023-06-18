import React from 'react'
import style from '../styles/sign.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faEyeSlash, faArrowRight } from '@fortawesome/free-solid-svg-icons'



function signin() {
  return (
    <section className={style.sign}>
      <img src='Ellipse1.png' className={style.img1}/>
      <img src='Ellipse2.png' className={style.img2}/>
      <img src='Ellipse3.png' className={style.img3}/>
      <div className="logo">
        <img src='VENO.png' alt='logo'/>
        <p>welcome back</p>
      </div>

      <form>
       <h2>Sign up</h2>
        <div className={style.ff}>
          <label htmlFor='email'> Email Address</label>
          <div className='flex'>
            <input id='email'  />
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className={style.ff}>
          <label htmlFor='password'> password</label>
          <div className='flex'>
            <input id='password' />
            <FontAwesomeIcon icon={faEyeSlash} />
          </div>
        </div>
        <p>forgot password? </p>
        <p>Don&apos;t have an account? <Link href='/signup'> sign up</Link> </p>
     </form>

      <div className='btn'>
        <button type='button ' className="pur flex-sb">
          <img src='btnbg1.png' className="img" />
          <img src='btnbg2.png' className="img" />
          <Link href= '/signin' className='half flex-sb'>
              <p>Sign in</p>
              <FontAwesomeIcon icon={faArrowRight} />
          </Link>      
        </button>
      </div> 
    </section>
  )
}

export default signin