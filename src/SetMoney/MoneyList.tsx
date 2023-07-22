import React from 'react';
import { MoneyItemProps } from "./SetMoney";

type MoneyListProps = {
  money: MoneyItemProps[];
}

export const MoneyList = ({ money }: MoneyListProps) => {
  return (<ul>
    {money.map(cur => {
      return (<li key={cur.id} className="money-list">
        <span className="money-list-item">banknots: <strong> {cur.banknots} </strong> </span>
        <span className="money-list-item">value: <strong> {cur.value} </strong> </span>
        <span className="money-list-item">number: <strong> {cur.number} </strong>  </span>
      </li>)
    })}
  </ul>
  )
}