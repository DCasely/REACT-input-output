import React, { useState } from 'react';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {
  const [updateUser, setUpdateUser] = useState('dcasely');

  const changeUser = (e) => {
    console.log(e.target);
    setUpdateUser(e.target.value);
  };

  return (
    <div>
      <UserInput updateUser={changeUser} userName={updateUser} />
      <UserOutput username={updateUser} text="This is Paragraph for User1" />
    </div>
  );
};

export default App;
