import { User } from './HW2';


type CurrentUserProps = {
  user: User
}


export const CurrentUser = ({ user }: CurrentUserProps) => {
  return (
    <li key={user.id} id={`hw02-user-${user.id}`}>
      <strong>{user.name}</strong> (Age: {user.age})<strong> Address: </strong>
      {user.address.street}, {user.address.city}
    </li>
  );
};
