import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary.jsx';
import { HomeScreen, ProfileScreen, ShopScreen } from './Screens.jsx';
import PostList from './PostList.jsx';
import Example1 from './Example1.jsx';
import Example2 from './Example2.jsx';
import Example3 from './Example3.jsx';

function App() {
  // Exercise 4: Webhook POST
  const handleWebhook = async () => {
    const url = 'https://webhook.site/09327712-2c28-46ff-b1ea-48c18948cff7'; 
    const body = {
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    };
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    });
    const data = await res.text();
    console.log('Webhook response:', data);
  };

  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand navbar-light bg-light mb-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">Home</NavLink>
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/profile">Profile</NavLink>
            <NavLink className="nav-link" to="/shop">Shop</NavLink>
          </div>
        </div>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={
            <ErrorBoundary>
              <HomeScreen />
            </ErrorBoundary>
          } />
          <Route path="/profile" element={
            <ErrorBoundary>
              <ProfileScreen />
            </ErrorBoundary>
          } />
          <Route path="/shop" element={
            <ErrorBoundary>
              <ShopScreen />
            </ErrorBoundary>
          } />
        </Routes>
        <hr />
        <h2>Exercise 2: Post List</h2>
        <PostList />
        <hr />
        <h2>Exercise 3: Complex Data</h2>
        <Example1 />
        <Example2 />
        <Example3 />
        <hr />
        <h2>Exercise 4: Webhook POST</h2>
        <button className="btn btn-primary" onClick={handleWebhook}>Send JSON to Webhook</button>
        <p>Check the console for the response and the webhook site for the data.</p>
      </div>
    </BrowserRouter>
  );
}

export default App;
