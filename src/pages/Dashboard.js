import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Dashboard(){
  return (
    <div>
      <p>Welcome User </p>
      <Link to="settings">Settings</Link>
      <Outlet/>
    </div>
  )
}

export default Dashboard;