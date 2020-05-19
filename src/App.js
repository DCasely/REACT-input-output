import React, { useState } from 'react';
import Header from './Header/Header';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

const App = () => {
  const [user, setUser] = useState({
    username: 'dcasely',
    firstName: 'Davin',
    lastName: 'Casely',
    email: 'davin@davincasely.com',
  });

  const [currentAccount, setCurrentAccount] = useState(user);

  const updateFields = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const changeUser = (e) => {
    setCurrentAccount(user);
    e.preventDefault();
  };

  const resetFields = (e) => {
    setUser({ username: '', firstName: '', lastName: '', email: '' });

    setCurrentAccount('');

    e.preventDefault();
  };

  return (
    <div>
      <Header />
      <UserInput
        updateUser={changeUser}
        updateField={updateFields}
        reset={resetFields}
        userName={user.username}
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
      />
      <UserOutput
        username={currentAccount.username}
        firstName={currentAccount.firstName}
        lastName={currentAccount.lastName}
        email={currentAccount.email}
      />
    </div>
  );
};

export default App;
