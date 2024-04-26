import React, { useContext, useEffect } from 'react';
import { UserContext } from './UserContext';

function ProfilePage() {
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user.accessToken) {
      // Redirect to sign-up page if access token is not present
      // You can use react-router-dom's history object for redirection
    }
  }, [user]);

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      {/* Other user details */}
    </div>
  );
}

export default ProfilePage;
