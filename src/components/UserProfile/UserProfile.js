
import Header from '../Header/Header';


const UserProfile = ({state,user}) => {
    const hendleState = ()=> console.log(state)
console.log(user,state)
    
    return (
        <>
        <Header></Header>
        
        <div>
            <button onClick={ hendleState}>click me</button>
            <h1>user component {state.name}</h1>
            <h1>user contianer {user.name}</h1>
        </div>
        </>
    );
};

export default UserProfile;