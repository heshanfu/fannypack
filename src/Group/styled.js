import Group from 'reakit/Group';
import styled, { css } from 'reakit/styled';
import { theme } from 'styled-tools';

export default styled(Group)`
  & > * {
    border-radius: 4px;
  }

  & input:focus,
  & select:focus {
    z-index: 1;
    position: relative;
  }

  & > *:first-child {
    & input,
    & select {
      ${props =>
        props.vertical
          ? css`
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
            `
          : css`
              border-bottom-right-radius: 0;
              border-top-right-radius: 0;
            `};
    }
  }

  & > *:last-child {
    & input,
    & select {
      ${props =>
        props.vertical
          ? css`
              border-top-left-radius: 0;
              border-top-right-radius: 0;
            `
          : css`
              border-top-left-radius: 0;
              border-bottom-left-radius: 0;
            `};
    }
  }

  & > *:not(:first-child):not(:last-child) > input,
  & > *:not(:first-child):not(:last-child) > select {
    border-radius: 0;
  }

  & {
    ${theme('fannypack.Group.base')};
  }
`;
