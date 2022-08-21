import { User } from "./../user-card";

interface Props {
    user: User
}

export const UserInfo = ({ user }: Props) => {

    return (
        <>
            <h1>{user.name.firstname}</h1>
            <p><strong>username:</strong> {user.username}</p>
            <p><strong>email:</strong> {user.email}</p>
            <p><strong>password:</strong> {user.password}</p>
        </>
    );
};