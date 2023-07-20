import React from 'react';

export type ToggleButtonProps = {
  action: () => void,
  children: string
  id: string
}

export const ToggleButton = (props: ToggleButtonProps) => {
  return (
    <button key={props.id} onClick={() => { props.action() }}>{props.children}</button>
  )
}
