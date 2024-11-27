import React, { FC } from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import { ROUTES } from '../../constants/routes'
import CategoryCard from './CategoryCard'

import css from './index.module.scss'

interface ICategories {
  categories: Category[]
}

const Categories: FC<ICategories> = ({ categories }) => {
  return (
    <section className={css.container}>
      <div className={css.titleWrapper}>
        <h3>Shop by categories</h3>
        <Link href={ROUTES.PRODUCTS}>Show All</Link>
      </div>
      {categories.map(category => (
        <CategoryCard key={category.id} category={category} />
      ))}
      <div className={css.list}></div>
    </section>
  )
}

export default Categories
