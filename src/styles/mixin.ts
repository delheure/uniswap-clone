import { css } from "styled-components";

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const lineBreak = css`
  white-space: pre-wrap;
  word-break: break-word;
`;

export const noneDraggable = css`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

export const transition = css`
  transition-duration: 125ms;
  transition-timing-function: ease-in-out;
  transition-property: opacity, color, background-color;
`;
