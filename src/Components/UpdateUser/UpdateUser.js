import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/user/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

  const handleUpdateUser = e =>{
        e.preventDefault();
        // take data from form submit
        const name = e.target.name.value;
        const email = e.target.email.value;
        const updatedUser = { name, email };
    
        // send a user data to the server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success',data);
            alert('updated successfully');
            e.target.reset();
        })
  }

  return (
    <div>
      <h2>Update User : {user.name}</h2>
      <form onSubmit={handleUpdateUser}>
        <input type="text" name="name" id="" required placeholder="Name" />
        <br />
        <input type="email" name="email" id="" required placeholder="Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default UpdateUser;
