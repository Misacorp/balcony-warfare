import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Balcony from './Balcony/Balcony';

import useKeyListener from './hooks/useKeyListener';
import Controls from './Controls';

const MainStructure = ({ className }) => {
  const [grassProgress, setGrassProgress] = useState(0);

  // Set up key listeners
  const decrease = useCallback(() => {
    setGrassProgress(Math.max(grassProgress - 1, 0));
  }, [grassProgress]);

  const increase = useCallback(() => {
    setGrassProgress(Math.min(grassProgress + 1, 6));
  }, [grassProgress]);

  useKeyListener('ArrowLeft', decrease);
  useKeyListener('ArrowRight', increase);

  return (
    <div className={className}>
      <div>
        <Balcony grassProgress={grassProgress} />

        <Controls increase={increase} decrease={decrease} />
      </div>
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
