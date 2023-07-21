//mircotask
type CarType = {
  id: number;
  manufacturer: string;
  model: string;
};

type Cars = {
  cars: CarType[]; // ожидание всего массива cars  у родителя
};

export const Car = (props: Cars) => {

  return (
    <div id={'hw01-users'} className="car">
      <h2>Car List:</h2>
      <table>{props.cars.map(car => {
        return (<tbody key={car.id}><tr >
          <th>{car.manufacturer}</th>
        </tr>
          <tr>
            <td>{car.model}</td>
          </tr>
          <tr>
            <td>{car.id}</td>
          </tr></tbody>
        )
      })}

      </table>
    </div >
  );
};