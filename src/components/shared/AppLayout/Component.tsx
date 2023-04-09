import { FC } from 'react'
import { ContainerProps } from './Container'

type Props = ContainerProps & {}

export const Component: FC<Props> = (props) => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  )
}
