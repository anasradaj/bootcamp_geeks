import React from 'react';

function HomeScreen() {
  return <h2>Home Screen</h2>;
}

function ProfileScreen() {
  return <h2>Profile Screen</h2>;
}

function ShopScreen() {
  throw new Error('Shop crashed!');
}

export { HomeScreen, ProfileScreen, ShopScreen };
