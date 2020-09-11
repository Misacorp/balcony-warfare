import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Button from './generic/button/Button';

const ControlsStructure = ({ increase, decrease, className }) => {
  return (
    <div className={className}>
      <Button accent="orange" onClick={decrease}>
        &lt;
      </Button>
      <Button accent="orange" onClick={increase}>
        &gt;
      </Button>
    </div>
  );
};

const Controls = styled(ControlsStructure)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

ControlsStructure.propTypes = {
  increase: PropTypes.func.isRequired,
  decrease: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default Controls;
