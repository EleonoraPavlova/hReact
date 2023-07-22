
import { useState } from "react";
import { Button } from "../components/Button";
import "./index.css"
import { MoneyList } from "./MoneyList";


export type MoneyItemProps = {
  banknots: string,
  value: number,
  number: string,
  id: number
}

type nameCurrency = "Dollars" | "Euros" | "Other"

export const SetMoney = () => {
  const moneyArr = [
    { banknots: 'Dollars', value: 100, number: ' a1234567890', id: 1 },
    { banknots: 'Euros', value: 90, number: ' v1134567890', id: 2 },
    { banknots: 'Dollars', value: 50, number: ' z1234567890', id: 3 },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890', id: 4 },
    { banknots: 'Dollars', value: 100, number: ' e1234567890', id: 5 },
    { banknots: 'Dollars', value: 50, number: ' c1234567890', id: 6 },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890', id: 7 },
    { banknots: 'Dollars', value: 50, number: ' x1234567890', id: 8 },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890', id: 9 },
    { banknots: 'Euros', value: 60, number: ' v1234567880', id: 10 },
    { banknots: 'GBP', value: 30, number: ' g1234567890', id: 11 },
    { banknots: 'GBP', value: 50, number: ' g1234566890', id: 12 },
  ]

  const [money, setMoney] = useState<MoneyItemProps[]>(moneyArr)

  let filteredMoney = money;
  function filterMoney(name: nameCurrency) {
    if (name) filteredMoney = moneyArr.filter(m => m.banknots === name)
    if (name === "Other") filteredMoney = moneyArr.filter(m => m.banknots !== 'Dollars' && m.banknots !== 'Euros')
    setMoney(filteredMoney)
  }


  return (
    <div className="set-money">
      <h5>All currency</h5>
      <MoneyList money={filteredMoney} />
      <Button id="dollars" action={() => filterMoney("Dollars")} additionalClass="item red">Dollars</Button>
      <Button id="euros" action={() => filterMoney("Euros")} additionalClass="item violet">Euros</Button>
      <Button id="other" action={() => filterMoney("Other")} additionalClass="item pink">Other</Button>
    </div>
  );
};
