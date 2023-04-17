import PropTypes from 'prop-types';
import React from 'react';
import { HiArrowLeft } from 'react-icons/hi';
import { BackwardLink } from './BackLink.styled';

const BackLink = ({ to, children }) => {
  return (
    <BackwardLink to={to}>
      <HiArrowLeft size={24} />
      {children}
    </BackwardLink>
  );
};

BackLink.propTypes = {
  to: PropTypes.object.isRequired,
  children: PropTypes.string.isRequired,
};

export default BackLink;
