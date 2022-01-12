import React from 'react';
import { useState } from 'react';
import { signInUser, signUpUser } from '../services/users';
import AuthForm from '../components/AuthForm';
import Header from '../components/Header.js';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('sign in');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp =
        type === 'sign in' ? await signInUser(email, password) : await signUpUser(email, password);
      setCurrentUser(resp);
    } catch {
      setError('Error, try again');
    }
  };

  return (
    <div>
      <Header type={type} setType={setType} />
      <AuthForm
        handleSubmit={handleSubmit}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        error={error}
      />
    </div>
  );
}
