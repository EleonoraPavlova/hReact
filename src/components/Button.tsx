import React, { ReactNode } from 'react';


export type ButtonProps = {
  action: () => void,
  id: string,
  children: ReactNode;
  color?: string,
  class?: string,
}

export const Button = (props: ButtonProps) => {
  return (
    <button key={props.id} onClick={() => { props.action() }}>{props.children}</button>
  )
}
