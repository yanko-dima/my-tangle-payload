import React from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { RenderParams } from '../../_components/RenderParams'
import { mergeOpenGraph } from '../../_utilities/mergeOpenGraph'
import { RecoverPasswordForm } from './RecoverPasswordForm'

import style from './index.module.scss'

export default async function RecoverPassword() {
  return (
    <section className={style.recoverPassword}>
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
          <Link href={'/login'} className={style.backLink}>
            <Image src={'/assets/icons/arrow-left.svg'} alt={'left arrow'} width={24} height={24} />
            <p>Back</p>
          </Link>
          <div className={style.formTytle}>
            <h3>Forgot password</h3>
          </div>
          <RecoverPasswordForm />
        </div>
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  title: 'Recover Password',
  description: 'Enter your email address to recover your password.',
  openGraph: mergeOpenGraph({
    title: 'Recover Password',
    url: '/recover-password',
  }),
}
