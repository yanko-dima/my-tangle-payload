import React from 'react'

import { Page } from '../../../payload/payload-types'
import { CMSLink } from '../../_components/Link'
import RichText from '../../_components/RichText'

import css from './index.module.scss'

const CustomHero: React.FC<Page['hero']> = ({ richText, media, links }) => {
  const mediaUrl =
    media &&
    typeof media !== 'string' &&
    `${process.env.NEXT_PUBLIC_SERVER_URL}/media/${media.filename}`

  return (
    <section className={css.hero}>
      <div className={css.heroWrapper} style={{ backgroundImage: `url(${mediaUrl})` }}>
        <div className={css.heroTextBox}>
          <RichText content={richText} />
          {Array.isArray(links) && links.length > 0 && (
            <ul className={css.links}>
              {links.map(({ link }, i) => {
                return (
                  <li key={i}>
                    <CMSLink {...link} />
                  </li>
                )
              })}
            </ul>
          )}
        </div>
        {/*<div className={css.media}>*/}
        {/*  {typeof media === 'object' && (*/}
        {/*    <Fragment>*/}
        {/*      <Media*/}
        {/*        resource={media}*/}
        {/*        // fill*/}
        {/*        imgClassName={css.image}*/}
        {/*        priority*/}
        {/*      />*/}
        {/*      {media?.caption && <RichText content={media.caption} className={css.caption} />}*/}
        {/*    </Fragment>*/}
        {/*  )}*/}
        {/*</div>*/}
      </div>
    </section>
  )
}

export default CustomHero
