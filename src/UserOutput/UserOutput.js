import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="output">
      <p>Username: {props.username}</p>
      <p>First Name: {props.firstName}</p>
      <p>Last Name: {props.lastName}</p>
      <p>Email Name: {props.email}</p>
    </div>
  );
};

export default UserOutput;
