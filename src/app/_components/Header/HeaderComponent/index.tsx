'use client'

import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Header } from '../../../../payload/payload-types'
import { noHeaderFooterUrls } from '../../../constants'
import { ROUTES } from '../../../constants/routes'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import style from './index.module.scss'

interface Props {
  header: Header
}

const HeaderComponent: FC<Props> = ({ header }) => {
  const pathname = usePathname()

  return (
    <nav
      className={[style.header, noHeaderFooterUrls.includes(pathname) && style.hide]
        .filter(Boolean)
        .join(' ')}
    >
      <Gutter className={style.wrap}>
        <Link href={ROUTES.HOME}>
          <Image src="/logo-black.svg" alt={'Tangle Teezer'} width={170} height={50} />
        </Link>

        <HeaderNav header={header} />
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
