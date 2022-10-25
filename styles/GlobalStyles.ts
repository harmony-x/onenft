import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: 'Stapel' !important;
    background-color: #242636;
    font-size: 62.5%;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: 0.3s ease-in-out;
    &:hover {
      color: rgba(5, 212, 182, 0.67);
    }
  }
  p {
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
      &::-webkit-scrollbar {
        width: 7px;
        height: 7px;
      }
      &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        background: #2D2F43;
      }
      &::-webkit-scrollbar-thumb:active {
        background: #2D2F43;
      }
      &::-webkit-scrollbar-track {
        border-radius: 53px;
      }
  }
  button {
    outline: none;
    border: none;
    background: transparent;
    height: fit-content;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .ant-modal-centered .ant-modal {
    width: 90% !important;
    max-width: 736px !important;
  }
  .ant-skeleton-content {
    margin-top: 50px;
    display: block;
  } 
  .ant-modal-mask {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2.5px);
  }
  
  .ant-dropdown-arrow {
    display: none;
  }
  .ant-select-dropdown {
    background-color: #2D2F43;
  }
  .ant-select-item {
    color: rgba(255, 255, 255, 0.67);
    font-weight: 300;
  }
  .ant-select-item-option-active:not(.ant-select-item-option-disabled), .ant-select-item-option-selected:not(.ant-select-item-option-disabled) {
    background-color: #242636;
    color: rgba(255, 255, 255, 0.87);
  }
  
  .ant-message-notice-content {
    display: inline-flex;
    align-items: center;
    padding: 0;
    box-shadow: none;
    border-radius: 8px;
    border: 1px solid;
    .toast-success & {
      border-color: #2D2F43;
      border-radius: 8px;
      background: #2D2F43;
      color: #FFFFFF;
    }
    .toast-error & {
      border-color: #2D2F43;
      border-radius: 8px;
      background: #2D2F43;
      color: #FFFFFF;
    }
  }
  .ant-message-custom-content {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 10px 16px;
  }
  .ant-row {
    width: 100%;
  }

  /* @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  } */

`;
