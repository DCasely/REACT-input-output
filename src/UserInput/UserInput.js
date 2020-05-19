import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div>
      <form className="UserInput">
        <input
          onChange={props.updateField}
          className="input-username"
          name="username"
          type="text"
          value={props.userName}
          placeholder="Username"
        />

        <input
          onChange={props.updateField}
          name="firstName"
          type="text"
          value={props.firstName}
          placeholder="Enter Your First Name"
        />

        <input
          onChange={props.updateField}
          name="lastName"
          type="text"
          value={props.lastName}
          placeholder="Enter Your Last Name"
        />

        <input
          onChange={props.updateField}
          name="email"
          type="email"
          value={props.email}
          placeholder="Enter Your Email"
        />

        <div>
          <button onClick={props.updateUser} type="submit">
            Submit
          </button>
          <button onClick={props.reset}>RESET</button>
        </div>
      </form>
    </div>
  );
};

export default UserInput;
