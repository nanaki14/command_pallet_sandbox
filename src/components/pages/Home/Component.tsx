import { NextSeo } from 'next-seo'
import { FC } from 'react'
import { ContainerProps } from './Container'
import { CommandPallet } from '@/components/shared/CommandPallet'

type Props = ContainerProps & {}

export const Component: FC<Props> = () => {
  return (
    <div className="relative h-screen bg-slate-800">
      <NextSeo title="ホーム" />
      <CommandPallet />
    </div>
  )
}
