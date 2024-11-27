import React, { FC } from 'react'
import Link from 'next/link'

import { Category } from '../../../../payload/payload-types'
import { ROUTES } from '../../../constants/routes'

import css from './index.module.scss'

interface ICategoryCard {
  category: Category
}

const CategoryCard: FC<ICategoryCard> = ({ category }) => {
  return (
    <Link href={ROUTES.PRODUCTS} className={css.card}>
      <p className={css.title}>{category.title}</p>
    </Link>
  )
}

export default CategoryCard
