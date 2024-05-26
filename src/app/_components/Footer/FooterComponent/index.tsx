'use client'

import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Footer, Media } from '../../../../payload/payload-types'
import { inclusions, noHeaderFooterUrls } from '../../../constants'
import { ROUTES } from '../../../constants/routes'
import { Button } from '../../Button'
import { Gutter } from '../../Gutter'

import style from './index.module.scss'

interface Props {
  footer: Footer
}

const FooterComponent: FC<Props> = ({ footer }) => {
  const pathname = usePathname()
  const navItems = footer?.navItems || []

  return (
    <footer className={noHeaderFooterUrls.includes(pathname) ? style.hide : ''}>
      <Gutter>
        <ul className={style.inclusions}>
          {inclusions.map(inclusion => (
            <li key={inclusion.title}>
              <Image
                className={style.icon}
                src={inclusion.icon}
                alt={inclusion.title}
                width={36}
                height={36}
              />
              <h5 className={style.title}>{inclusion.title}</h5>
              <p className={style.description}>{inclusion.description}</p>
            </li>
          ))}
        </ul>

        <div className={style.footer}>
          <Gutter>
            <div className={style.wrap}>
              <Link href={ROUTES.HOME}>
                <Image src="/logo-white.svg" alt="logo" width={170} height={50} />
              </Link>

              <p>{footer?.copyright}</p>

              <div className={style.socialLinks}>
                {navItems.map(item => {
                  const icon = item?.link?.icon as Media

                  return (
                    <Button
                      key={item.link.label}
                      el="link"
                      href={item.link.url}
                      newTab={true}
                      className={style.socialLinkItem}
                    >
                      <Image
                        src={icon?.url}
                        alt={item.link.label}
                        width={24}
                        height={24}
                        className={style.socialIcon}
                      />
                    </Button>
                  )
                })}
              </div>
            </div>
          </Gutter>
        </div>
      </Gutter>
    </footer>
  )
}

export default FooterComponent
