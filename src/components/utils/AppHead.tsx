import NextHead from 'next/head'
import { FC } from 'react'
import { DefaultSeo } from 'next-seo'
import { constants } from '@/constants'

type Props = {}

export const AppHead: FC<Props> = () => {
  return (
    <>
      <DefaultSeo {...constants.meta} />
      <NextHead>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1,user-scalable=no"
        />
      </NextHead>
    </>
  )
}
