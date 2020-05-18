import React from 'react';

const UserOutput = (props) => {
  const styleOutput = {
    textAlign: 'center',
    color: 'red',
    fontSize: '2rem',
  };

  return (
    <div style={styleOutput}>
      <p>Username: {props.username}</p>
      <p>{props.text}</p>
    </div>
  );
};

export default UserOutput;
