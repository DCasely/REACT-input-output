import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div className="UserInput">
      <input
        className="input-username"
        name="username"
        onChange={props.updateUser}
        type="text"
        value={props.userName}
      />
      <button className="submit-btn">Submit</button>
    </div>
  );
};

export default UserInput;
