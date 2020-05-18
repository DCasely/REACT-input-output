import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
  return (
    <div>
      <form onSubmit={props.updateUser} className="UserInput">
        <label htmlFor="username">Username: </label>
        <input
          onChange={props.updateField}
          className="input-username"
          name="username"
          type="text"
          value={props.userName}
        />

        <label htmlFor="firstname">First Name: </label>
        <input
          onChange={props.updateField}
          name="firstname"
          type="text"
          value={props.firstName}
        />

        <label htmlFor="lastname">Last Name: </label>
        <input
          onChange={props.updateField}
          name="lastname"
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

        <button>Submit</button>
        <button>RESET</button>
      </form>
    </div>
  );
};

export default UserInput;
