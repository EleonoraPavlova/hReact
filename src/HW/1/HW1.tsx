
import { Button } from "../../components/Button";
import { Car } from "./Car";
import { UserList } from './UserList';

export const HW1 = () => {

	// 1️⃣ Раскомментируйте JSX (HW1.tsx, UserList.tsx) и вы увидите,
	// что приложение начнет гореть красным и ругаться 😡
	// 2️⃣ Ваша задача: ❗ПОЧИНИТЬ ПРОЕКТ❗
	// - прописать типизацию, где необходимо
	// - починить все, что горит красным
	// - дописать функциональность (где указано комментариями)
	// - приложение должно компилироваться и запускаться в браузере

	// ❗ Массив с данными не трогаем!
	// ❗ id на элементах не удаляем и не изменяем! Они нужны для автотестов.
	// Если нужно подставить элемент массива в id, то подставляем по аналогии с другими элементами!

	const users = [
		{ id: 1, name: 'John', age: 25, address: { street: '123 Main St', city: 'New York' } },
		{ id: 2, name: 'Alice', age: 30, address: { street: '456 Elm St', city: 'San Francisco' } },
		{ id: 3, name: 'Bob', age: 35, address: { street: '789 Oak St', city: 'Seattle' } },
		{ id: 4, name: 'John', age: 44, address: { street: '123 Maple Ave', city: 'Dallas' } },
		{ id: 5, name: 'Mary', age: 13, address: { street: '456 Elm St', city: 'Los Angeles' } },
		{ id: 6, name: 'James', age: 18, address: { street: '987 Pine Rd', city: 'Dallas' } },
		{ id: 7, name: 'Jennifer', age: 21, address: { street: '654 Birch Ct', city: 'Seattle' } },
		{ id: 8, name: 'Robert', age: 4, address: { street: '876 Spruce Way', city: 'San Francisco' } },
		{ id: 9, name: 'Jessica', age: 12, address: { street: '543 Willow Dr', city: 'San Francisco' } },
		{ id: 10, name: 'Emily', age: 55, address: { street: '765 Aspen Blvd', city: 'Los Angeles' } },
	];

	const cars = [
		{ manufacturer: 'BMW', model: 'm5cs', id: 1 },
		{ manufacturer: 'Mercedes', model: 'e63s', id: 2 },
		{ manufacturer: 'Audi', model: 'rs6', id: 3 }
	]

	function oneButton() {

		console.log('one')
	}

	function twoButton(n: number, age: number) {
		console.log(n, age)
	}

	return (
		<div id={'hw01'}>
			<UserList users={users} />
			<Car cars={cars} />
			<Button id="one" action={oneButton} color="red">Channel 1</Button>
			<Button id="two" action={() => twoButton(2, 78)}>Channel 2</Button>
		</div>
	);
};
