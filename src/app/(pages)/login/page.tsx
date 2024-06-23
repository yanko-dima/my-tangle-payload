import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import LoginForm from './LoginForm'

import style from './index.module.scss'

export default async function Login() {
  await getMeUser({
    validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
  })

  return (
    <section className={style.login}>
      <div className={style.heroImg}>
        <Link href={'/'}>
          <Image
            src={'/logo-black.svg'}
            alt={'logo'}
            width={250}
            height={23}
            className={style.logo}
          />
        </Link>
      </div>

      <div className={style.formWrapper}>
        <div className={style.formContainer}>
          <RenderParams className={style.params} />
          <div className={style.formTytle}>
            <h3>Welcome</h3>
          </div>
          <p>Please login here</p>
          <LoginForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Login',
  description: 'Login or create an account to get started.',
  openGraph: mergeOpenGraph({
    title: 'Login',
    url: '/login',
  }),
}
