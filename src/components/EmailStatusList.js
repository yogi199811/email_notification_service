// /src/components/EmailStatusList.js
import React, { useEffect, useState } from 'react';

const EmailStatusList = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    // Fetch email statuses from the backend
  }, []);

  return (
    <ul>
      {statuses.map((status, index) => (
        <li key={index}>
          {status.email}: {status.state}
        </li>
      ))}
    </ul>
  );
};

export default EmailStatusList;
