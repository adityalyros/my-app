// Signup.js
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider';

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleSignup = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Generate random access token
    const accessToken = Math.random().toString(36).substring(2, 18);

    // Create user object
    const user = { username, password, accessToken };

    // Store user in context
    setUser(user);

    // Redirect to profile
    history.push('/profile');
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default SignUp;
