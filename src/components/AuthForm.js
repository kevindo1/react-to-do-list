import React from 'react';

export default function AuthForm({
  email,
  password,
  handleSubmit,
  setEmail,
  setPassword,
  errorMessage,
}) {
  return (
    <div>
      <form>
        <p>{errorMessage}</p>
        <label>
          Email:
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}></input>
        </label>
        <label>
          Password:
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}></input>
        </label>
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </div>
  );
}
