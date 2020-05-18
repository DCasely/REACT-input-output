import React, { useState } from 'react';
import Header from './Header/Header';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {
  const [updateUser, setUpdateUser] = useState({
    username: 'dcasely',
    firstName: 'Davin',
    lastName: 'Casely',
    email: 'davin@davincasely.com',
  });

  const updateFields = () => {};

  const changeUser = (e) => {
    console.log(e.target);
    setUpdateUser(e.target.value);
  };

  return (
    <div>
      <Header />
      <UserInput
        updateUser={changeUser}
        updateField={updateFields}
        userName={updateUser.username}
        firstName={updateUser.firstName}
        lastName={updateUser.lastName}
        email={updateUser.email}
      />
      <UserOutput
        username={updateUser.username}
        firstName={updateUser.firstName}
        lastName={updateUser.lastName}
        email={updateUser.email}
        text="This is Paragraph for User1"
      />
    </div>
  );
};

export default App;
