#### App.js

- currentUser useState
- Route to / which has login page and once logged in, can see the to do list
- if currentUser is true, then sees the to do list
- if currentUser is false, then send to auth page to sign up or sign in

#### Auth.js - views

- email (setEmail) and password (setPassword) useStates
- type (setType) which determines if the user is signing in or signing up
- error (setError) to tell user if the sign up or sign in failed
- handleSubmit which sends the data to supabase

#### users.js - services

- signInUser, signOutUser

#### AuthForm.js - component

- Props passed down from Auth.js
- handleSubmit onClick
