// Profile.js
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider';

function Profile() {
  const { user, setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogout = () => {
    setUser(null);
    history.push('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <h2>Profile</h2>
      <p>Username: {user.username}</p>
      <p>Access Token: {user.accessToken}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
