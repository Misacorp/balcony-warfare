import { css } from 'styled-transition-group';

export default (defaultTranslation) => css`
  &:enter {
    transform: ${defaultTranslation} scale(0);
  }

  &:enter-active {
    transform: ${defaultTranslation} scale(1);
    transition: transform 300ms ease-out;
    transition-delay: ${({ row }) => (row === 1 ? 0 : 100)}ms;
  }

  &:exit {
    transform: ${defaultTranslation} scale(1);
  }

  &:exit-active {
    transform: ${defaultTranslation} scale(0);
    transition: transform 300ms ease-out;
    transition-delay: ${({ row }) => (row === 1 ? 0 : 100)}ms;
  }
`;
