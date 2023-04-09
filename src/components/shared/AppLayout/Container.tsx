import { FC, ReactNode } from 'react'
import { Component } from './Component'

export type ContainerProps = {
  children: ReactNode
  className?: string
}

export const Container: FC<ContainerProps> = ({ ...props }) => {
  return <Component {...props} {...{}} />
}
