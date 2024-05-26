'use client'

import { FC } from 'react'
import Link from 'next/link'

import { Header as HeaderType } from '../../../../payload/payload-types'
import { useAuth } from '../../../_providers/Auth'
import { ROUTES } from '../../../constants/routes'
import { Button } from '../../Button'
import { CartLink } from '../../CartLink'
import { CMSLink } from '../../Link'

import style from './index.module.scss'

export const HeaderNav: FC<{ header: HeaderType }> = ({ header }) => {
  const navItems = header?.navItems || []
  const { user } = useAuth()

  return (
    <nav className={[style.nav, user === undefined && style.hide].filter(Boolean).join(' ')}>
      {navItems.map(({ link }, i) => {
        return <CMSLink key={i} {...link} appearance="none" />
      })}
      <CartLink />
      {user && <Link href={ROUTES.ACCOUNT}>Account</Link>}
      {!user && (
        <Button
          el={'link'}
          href={ROUTES.LOGIN}
          label={'LOGIN'}
          appearance={'primary'}
          onClick={() => (window.location.href = ROUTES.LOGIN)}
        />
      )}
      {user && <CartLink />}
    </nav>
  )
}
