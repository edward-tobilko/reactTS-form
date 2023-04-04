import styled, { createGlobalStyle } from "styled-components";

// Global styles
export default createGlobalStyle`
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    margin-bottom: 0 !important;

    :root {
      /* Colors */
      --blackColor: #323030;
      --orangeColor: #ea6422;
      --errorColor: #f10d0d;
      --greenColor: #127a04;
      --greyColor: #ada7a788;
      --whiteColor: #ffffff;
    }
  }

  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -ms-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    color: var(--blackColor);
  }

  :focus {
    outline: none;
  }

  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }

  ol,
  ul {
    list-style: none;
  }

  blockquote,
  q {
    quotes: none;
  }

  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  input[type="search"] {
    -webkit-appearance: none;
    -moz-appearance: none;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
    resize: vertical;
  }

  audio,
  canvas,
  video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
    max-width: 100%;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  [hidden] {
    display: none;
  }

  html {
    font-size: 100%;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a:focus {
    outline: none;
  }

  a:active,
  a:hover {
    outline: none;
  }

  img {
    border: 0;
    -ms-interpolation-mode: bicubic;
  }

  figure {
    margin: 0;
  }

  form {
    margin: 0;
  }

  fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
  }

  legend {
    border: 0;
    padding: 0;
    white-space: normal;
    *margin-left: -7px;
  }

  button,
  input,
  select,
  textarea {
    font-size: 100%;
    margin: 0;
    vertical-align: baseline;
    *vertical-align: middle;
  }

  button,
  input {
    line-height: normal;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  html input[type="button"],
  input[type="reset"],
  input[type="submit"] {
    -webkit-appearance: button;
    cursor: pointer;
    *overflow: visible;
  }

  button[disabled],
  html input[disabled] {
    cursor: default;
  }

  input[type="checkbox"],
  input[type="radio"] {
    box-sizing: border-box;
    padding: 0;
    *height: 13px;
    *width: 13px;
  }

  input[type="search"] {
    -webkit-appearance: textfield;
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  button::-moz-focus-inner,
  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  textarea {
    overflow: auto;
    vertical-align: top;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  html,
  button,
  input,
  select,
  textarea {
    color: #222;
  }

  ::-moz-selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  ::selection {
    background: #b3d4fc;
    text-shadow: none;
  }

  img {
    vertical-align: middle;
  }

  fieldset {
    border: 0;
    margin: 0;
    padding: 0;
  }

  textarea {
    resize: vertical;
  }

  .chromeframe {
    margin: 0.2em 0;
    background: #ccc;
    color: #000;
    padding: 0.2em 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

// App component
export const AppStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;

  @media screen and (max-width: 420px) {
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 50px;
  }
`;

export const AppFormStyle = styled.div`
  max-width: 400px;
  width: 100%;
  border: 1px solid var(--blackColor);
  border-radius: 7px;

  @media screen and (max-width: 420px) {
    max-width: 350px;
  }
`;

export const AppFormHeaderStyle = styled.ul`
  min-height: 50px;
  background-color: var(--greyColor);
  display: flex;
  align-items: center;
  padding-left: 15px;
`;

export const AppFormHeaderBtnStyle = styled.li`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--whiteColor);
  margin: 0 5px;
`;
