import { FC, useState } from 'react'
import { Component } from './Component'

export type ContainerProps = {}

export const Container: FC<ContainerProps> = ({ ...props }) => {
  const [commands, setCommands] = useState<string[]>([])
  const [search, setSearch] = useState<string>('')
  console.log(commands)
  const handleSetCommands = (command: string) => {
    setCommands((prev) => [...prev, command])
    setSearch('')
  }
  return (
    <Component
      {...props}
      {...{ commands, handleSetCommands, search, setSearch }}
    />
  )
}
