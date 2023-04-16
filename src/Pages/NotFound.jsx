import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <main>
      <div>
        This page does not exist! Please, go to <Link to={'/'}>Home page</Link> and try
        again.
      </div>
    </main>
  );
};

export default NotFound;
