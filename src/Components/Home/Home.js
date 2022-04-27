import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    // fetch data from database
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        const url = `http://localhost:5000/user`;
        fetch(url)
        .then(res => res.json())
        .then(data => setUsers(data))
    },[])

    // delete data from data base
    const handleUserDelete = id =>{
        const proceed = window.confirm("Are you sure ?");
        if(proceed){
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE',
            })
            .then(res => res.json())
            .then(data =>{
               if(data.deletedCount > 0){
                   const remaining = users.filter(user=> user._id !==id);
                   setUsers(remaining);             
               }
            })
        }
    }

    return (
        <div>
            <h2>This is home :{users.length}</h2>
            <ul>
                {
                    users.map(user => 
                    <li key={user._id}>{user.name} email: {user.email}
                    <Link to={`/update/${user._id}`}>
                    <button>Update</button>
                    </Link>
                    <button onClick={() => handleUserDelete(user._id)}>X</button>
                    </li>
                    )
                }
            </ul>
        </div>
    );
};

export default Home;