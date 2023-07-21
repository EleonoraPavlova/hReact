
import { ToggleButton } from "./Button";
import { CurrentUser } from './CurrentUser';
import { UsersObject } from './HW2';


type UserList2Props = {
	users: UsersObject;
	filterUsers: () => void;
};

export const UserList2 = (props: UserList2Props) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List 2:</h2>
			<ToggleButton id="hw02-filter-button" action={props.filterUsers}>SHOW ME FRIENDS FROM LA</ToggleButton>
			<ul>
				{props.users.myFriends.map((user) => (< CurrentUser key={user.id} user={user} />))}
			</ul>
		</div>
	);
};


// 		<button id={'hw02-filter-button'} onClick={() => props.filterUsers()}>SHOW ME FRIENDS FROM LA</button>