import { css } from 'styled-components'

export const ellipsis = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

export const lineBreak = css`
  white-space: pre-wrap;
  word-break: break-word;
`
