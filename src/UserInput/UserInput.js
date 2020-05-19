import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div>
      <form className="UserInput">
        <label htmlFor="username">Username: </label>
        <input
          onChange={props.updateField}
          className="input-username"
          name="username"
          type="text"
          value={props.userName}
        />

        <label htmlFor="firstName">First Name: </label>
        <input
          onChange={props.updateField}
          name="firstName"
          type="text"
          value={props.firstName}
        />

        <label htmlFor="lastName">Last Name: </label>
        <input
          onChange={props.updateField}
          name="lastName"
          type="text"
          value={props.lastName}
        />

        <label htmlFor="email">Email: </label>
        <input
          onChange={props.updateField}
          name="email"
          type="text"
          value={props.email}
        />

        <button onClick={props.updateUser} type="button">
          Submit
        </button>
        <button onClick={props.reset}>RESET</button>
      </form>
    </div>
  );
};

export default UserInput;
