import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const BackLink = ({ to, children }) => {
  return (
    <Link to={to}>
      <HiArrowLeft size={24} />
      {children}
    </Link>
  );
};

export default BackLink;
