import React, { useState, useCallback } from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import BalconyBase from './BalconyBase';
import GrassTile from './GrassTile';
import StoneTile from './StoneTile';

import useKeyListener from '../hooks/useKeyListener';

const BalconyStructure = ({ className }) => {
  const [grassProgress, setGrassProgress] = useState(3);

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
      <BalconyBase />

      {[...Array(6).keys()].map((element, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <React.Fragment key={index}>
          {index < grassProgress && (
            <>
              <GrassTile row={1} column={index + 1} />
              <GrassTile row={2} column={index + 1} />
            </>
          )}

          {index >= grassProgress && (
            <>
              <StoneTile row={1} column={index + 1} />
              <StoneTile row={2} column={index + 1} />
            </>
          )}
        </React.Fragment>
      ))}

      <p>GrassProgress = {grassProgress}</p>
    </div>
  );
};

const Balcony = styled(BalconyStructure)`
  position: relative;
  width: 1002.04px;
  height: 753px;

  margin: auto;

  & > svg {
    position: absolute;
  }
`;

BalconyStructure.propTypes = {
  className: PropTypes.string,
};

export default Balcony;
