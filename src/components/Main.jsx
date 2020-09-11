import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Balcony from './Balcony/Balcony';

const MainStructure = ({ className }) => {
  return (
    <div className={className}>
      <Balcony />
    </div>
  );
};

const Main = styled(MainStructure)`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: #222;
  display: grid;
  place-items: center;
`;

MainStructure.propTypes = {
  className: PropTypes.string,
};

export default Main;
