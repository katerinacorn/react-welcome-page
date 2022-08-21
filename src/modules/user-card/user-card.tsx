import { useFetch } from "../../hooks/useFetch";
import { UserInfo } from "../user-card/user-info";
import { Avatar, Type } from "../../components/avatar";
import faker from "faker"
import "./user-card.css";

export type User = {
    address: {
        geolocation: {
            lat: string,
            long: string,
        },
        city: string,
        street: string,
        number: string,
        zipcode: string,
    }
    id: string,
    username: string,
    email: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    phone: string,
    __v: number
}

interface Props {
    userId: string
}

const UserCard = ({ userId }: Props) => {
    const { data, pending, error } = useFetch<User>(`https://fakestoreapi.com/users/${userId}`);

    if (error) {
        return <h2>Something went wrong :(</h2>
    }

    return (
        <div className="card-container">
            <Avatar alt={"user photo"} imgUrl={faker.image.people()} type={Type.SQUARE} />
            {pending && <h2>pending: true</h2>}
            {data && <UserInfo user={data} />}
        </div>
    );
};

export default UserCard;