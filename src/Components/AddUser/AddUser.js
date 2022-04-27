import React from "react";

const AddUser = () => {
  const handleAddUser = (e) => {
    e.preventDefault();
    // take data from form submit
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };

    // send a user data to the server
    fetch('http://localhost:5000/user', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data =>{
        console.log('success',data);
        e.target.reset();
    })
  };


  return (
    <div>
      <h2>Please add a new user</h2>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" required placeholder="Name" />
        <br />
        <input type="email" name="email" id="" required placeholder="Email" />
        <br />
        <input type="submit" value="Add User" />
      </form>
    </div>
  );
};

export default AddUser;
