import React from 'react';
import transition from 'styled-transition-group';
import PropTypes from 'prop-types';

import BoxImage from '../../assets/images/1x/Laatikko 2.png';

import animation from './animation';

const BoxStructure = ({ className }) => {
  return <img className={className} src={BoxImage} alt="Box" />;
};

const Box = transition(BoxStructure).attrs({
  unmountOnExit: true,
  mountOnEnter: true,
  timeout: 1000,
})`
  bottom: ${({ delay = 1 }) => delay * 22 - 22}%;
  right: ${({ delay = 1 }) => delay * 17 + 51}%;
  z-index: 10;

  transform-origin: 50% 60%;

  ${animation}
`;

BoxStructure.propTypes = {
  className: PropTypes.string,
};

export default Box;
