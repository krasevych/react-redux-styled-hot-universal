import { css } from 'styled-components';

const setMedia = size => (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `;

export const media = {
  giant: setMedia(1200),
  desktop: setMedia(992),
  tablet: setMedia(768),
  phone: setMedia(376)
};

export function truncate(width) {
  return `
    width: ${width};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;
}
