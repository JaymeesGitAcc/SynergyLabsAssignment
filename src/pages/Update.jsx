import { useContext } from "react";
import { useParams } from "react-router-dom";
import { usersContext } from "../contexts/usersContext";
import UserForm from "../components/UserForm";

const Update = () => {
    const { userId } = useParams();

    const { users } = useContext(usersContext);

    const userDetails = userId
        ? users?.find((user) => user.id === Number(userId))
        : null;

    return (
        <div>
            <UserForm userDetails={userDetails} />
        </div>
    );
};

export default Update;
