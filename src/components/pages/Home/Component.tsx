import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { ContainerProps } from './Container'

type Props = ContainerProps & {}

export const Component: FC<Props> = () => {
  return (
    <div className="relative">
      <NextSeo title="ホーム" />
    </div>
  )
}
