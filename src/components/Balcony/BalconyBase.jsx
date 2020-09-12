import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import { ReactComponent as BalconyBackground } from '../../assets/images/SVG/Balcony 4.svg';

const BalconyBaseStructure = ({ className }) => {
  return <BalconyBackground className={className} />;
};

const BalconyBase = styled(BalconyBaseStructure)`
  position: absolute;
`;

BalconyBaseStructure.propTypes = {
  className: PropTypes.string,
};

export default BalconyBase;
