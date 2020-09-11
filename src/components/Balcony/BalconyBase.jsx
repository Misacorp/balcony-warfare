import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { ReactComponent as BalconyBackground } from '../../assets/images/SVG/Balcony 3.svg';

const BalconyBaseStructure = ({ className }) => {
  return <BalconyBackground className={className} />;
};

const BalconyBase = styled(BalconyBaseStructure)`
  position: absolute;
  /* bottom: -18.25%; */
`;

BalconyBaseStructure.propTypes = {
  className: PropTypes.string,
};

export default BalconyBase;
