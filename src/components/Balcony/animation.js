import { css } from 'styled-transition-group';

export default css`
  &:enter {
    transform: scale(0);
  }

  &:enter-active {
    transform: scale(1);
    transition-property: transform;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) =>
      theme.transition.timingFunction};
    transition-delay: ${({ delay = 1 }) => delay * 100}ms;
  }

  &:exit {
    transform: scale(1);
  }

  &:exit-active {
    transform: scale(0);
    transition-property: transform;
    transition-duration: ${({ theme }) => theme.transition.duration};
    transition-timing-function: ${({ theme }) =>
      theme.transition.timingFunction};
    transition-delay: 0;
  }
`;
