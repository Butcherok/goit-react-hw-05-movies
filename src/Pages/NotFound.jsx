import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <div>NotFound! Go to <Link to={'/'}>Home</Link></div>;
    </main>
  );
};

export default NotFound;
