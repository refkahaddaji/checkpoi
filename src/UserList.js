import React,{useState,useEffect} from 'react'
import './App.css';
import User from './User'
import axios from'axios'

function UserList() {

    const [userList,setUserList]=useState([]);
    const [errors,setErrors]=useState(null);

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>setUserList(res.data))
        .catch(error=> setErrors(error))
    },[])

    return (

            <section id="team" class="pb-5">
    <div className="container">
        <h5 className="section-title h1">Users</h5>
        <div className="row" >
            {!errors && 
userList.map(user=> 
        <User user={user} key={user.id} /> 
    )

}
</div>
    
    </div>
</section>
    )
}

export default UserList;
