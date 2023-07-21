
import { useState } from "react";
import { Button } from "../components/Button";
import "./index.css"



type SetMoney = {
  banknots: string,
  value: number,
  number: string,
}

export const SetMoney = () => {
  const [money, setMoney] = useState([
    { banknots: 'Dollars', value: 100, number: ' a1234567890' },
    { banknots: 'Euros', value: 90, number: ' v1134567890' },
    { banknots: 'Dollars', value: 50, number: ' z1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
    { banknots: 'Dollars', value: 100, number: ' e1234567890' },
    { banknots: 'Dollars', value: 50, number: ' c1234567890' },
    { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
    { banknots: 'Dollars', value: 50, number: ' x1234567890' },
    { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    { banknots: 'Euros', value: 60, number: ' v1234567880' },
    { banknots: 'GBP', value: 30, number: ' g1234567890' },
    { banknots: 'GBP', value: 50, number: ' g1234566890' },
  ])

  function filterMoney() {
    let filteredMoney = money.filter(m => m.banknots === "Dollars")
    setMoney(filteredMoney)
  }


  return (
    <div className="set-money">
      <Button id="dollars" action={filterMoney} class="item">Dollars</Button>
      <Button id="euros" action={filterMoney} class="item">Euros</Button>
      <Button id="other" action={filterMoney} class="item">Other</Button>
    </div>
  );
};
