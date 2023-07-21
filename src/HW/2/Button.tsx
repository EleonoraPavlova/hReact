import React, { ReactNode } from 'react';


export type ToggleButtonProps = {
  action: () => void,
  id: string,
  children: React.ReactNode;
}

export const ToggleButton = (props: ToggleButtonProps) => {
  return (
    <button key={props.id} onClick={() => { props.action() }}>{props.children}</button>
  )
}
