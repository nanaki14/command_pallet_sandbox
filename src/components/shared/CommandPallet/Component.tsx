import { Command } from 'cmdk'
import { FC } from 'react'
import { ContainerProps } from './Container'

type Props = ContainerProps & {
  commands: string[]
  handleSetCommands: (command: string) => void
  search: string
  setSearch: (search: string) => void
}

export const Component: FC<Props> = (props) => {
  return (
    <div className="commandPallet">
      <Command label="Global Command Menu">
        <div className="flex">
          {props.commands.map((command) => (
            <div className="badge" key={command}>
              {command}
            </div>
          ))}
        </div>
        <Command.Input onValueChange={props.setSearch} value={props.search} />
        <Command.List>
          <Command.Empty>No results found.</Command.Empty>

          {!props.commands.length && (
            <>
              <Command.Group heading="Letters">
                <Command.Item>a</Command.Item>
                <Command.Item>b</Command.Item>
                <Command.Separator />
                <Command.Item>c</Command.Item>
              </Command.Group>
              <Command.Group heading="Command">
                <Command.Item onSelect={props.handleSetCommands} value="apps">
                  Apps
                </Command.Item>
              </Command.Group>
            </>
          )}
          {props.commands[props.commands.length - 1] === 'apps' && (
            <Command.Group heading="Apps">
              <Command.Item>Create App</Command.Item>
              <Command.Item>Delete App</Command.Item>
            </Command.Group>
          )}
        </Command.List>
      </Command>
    </div>
  )
}
