// Login.js
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './AuthContextProvider';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { setUser } = useContext(AuthContext);
  const history = useHistory();

  const handleLogin = () => {
    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Simulate login process

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
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
