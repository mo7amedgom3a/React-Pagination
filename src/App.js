import React, { useEffect, useState, useContext } from 'react';

import UserList from './Pages/UserList';
import "./index.css";
function App() {
  return (
    <div className="App">
      <h1>User Directory</h1>
      <UserList />
    </div>
  );
}

export default App;
