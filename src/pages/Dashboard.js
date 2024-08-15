// /src/pages/Dashboard.js
import React from 'react';
import EmailForm from '../components/EmailForm';
import EmailStatusList from '../components/EmailStatusList';

const Dashboard = () => (
  <div>
    <h1>Email Dashboard</h1>
    <EmailForm />
    <EmailStatusList />
  </div>
);

export default Dashboard;
