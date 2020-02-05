





import React from 'react';


import { BrowserRouter as Router,Route } from 'react-router-dom';
import Login from "../src/components/login"
import Users from "../src/components/users"
import Post from "../src/components/post"
import Home from "../src/components/home"
import Register from "../src/components/register"
function App() {
  return (

     <Router>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/posts">
            <Post />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Register">
            <Register />
          </Route>
   </Router>
  );
}

export default App;
