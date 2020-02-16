import React from 'react';
import PropTypes from 'prop-types';

const Repo = ({ url, name }) => (
  <a href={url} 
    target='_blank' 
    rel='noopener noreferrer'>{name}</a>
);

Repo.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default Repo;
