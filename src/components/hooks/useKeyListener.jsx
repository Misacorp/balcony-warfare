import { useEffect, useCallback } from 'react';

const useKeyPress = (targetKey, callback) => {
  const keyHandler = useCallback(
    (event) => {
      if (event.key === targetKey) {
        callback();
      }
    },
    [targetKey, callback],
  );

  useEffect(() => {
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [keyHandler]);
};

export default useKeyPress;
