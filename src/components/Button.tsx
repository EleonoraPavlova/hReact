import React, { ReactNode } from 'react';


export type ButtonProps = {
  action: () => void,
  id: string,
  children: ReactNode;
  color?: string,
  additionalClass?: string,
}

export const Button = (props: ButtonProps) => {
  return (
    <button key={props.id} onClick={() => { props.action() }} className={`button ${props.additionalClass}`}> {props.children}</button >
  )
}
