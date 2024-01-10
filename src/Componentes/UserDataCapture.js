import React, { useState } from 'react';

const UserDataCapture = () => {
  const [userData, setUserData] = useState({ name: '', age: '' });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>User Data Capture</h2>
      <label>Nombre: </label>
      <input type="text" name="name" value={userData.name} onChange={handleChange} />
      <br />
      <label>Edad: </label>
      <input type="text" name="age" value={userData.age} onChange={handleChange} />
      <br />
      <p>{`Nombre: ${userData.name}, Edad: ${userData.age}`}</p>
    </div>
  );
};

export default UserDataCapture;