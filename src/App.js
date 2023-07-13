import './App.css';
import {useState} from "react";
import {UsersComponent} from "./UsersComponent/UsersComponent";
import {Posts} from "./UsersComponent/Posts/Posts";


const App = () => {
    const [userId, setUserId] = useState (null)
    return (
        <div className="App">
            <div>
                <UsersComponent setUserId={setUserId}/>
                {userId && <Posts userId={userId}/>}
            </div>
        </div>

    );
}

export {App};