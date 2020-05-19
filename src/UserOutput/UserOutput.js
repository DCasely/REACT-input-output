import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
  return (
    <div className="output">
      <p>
        Username: <span>{props.username}</span>
      </p>
      <p>
        First Name: <span>{props.firstName}</span>
      </p>
      <p>
        Last Name: <span>{props.lastName}</span>
      </p>
      <p>
        Email: <span>{props.email}</span>
      </p>
    </div>
  );
};

export default UserOutput;
