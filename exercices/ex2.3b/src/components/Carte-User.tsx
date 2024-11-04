import { User } from "../type";

interface carteUser{
    user : User[];
}

const CarteUser = (props:carteUser)=>{
    return(
        <>
            {props.user.map((user)=>(
            <div key={user.name}>
            <p>{user.name} {user.age}</p>
            </div>
        ))}
        </>
    );
}

export default CarteUser;