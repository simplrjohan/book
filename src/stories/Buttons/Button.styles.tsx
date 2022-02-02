import styled from 'styled-components';

export const ButtonGroupWrapper = styled.div`
  min-height: 100px;
  max-width: 70%;
  padding-left: 20px;
  margin: 8px 0px;
  display: flex;
  flex-flow: row wrap;

`;

export const StyledButton = styled.button`
  min-width: 80px;
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 8px 16px;
  .storybook-button {
    font-weight: 700;
    border: 0;
    border-radius: 3em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

    .storybook-button--disabled , &:disabled {
      background-color: lightgray;
      border: none;
      box-shadow: none;
    }
  }
  .storybook-button--primary {
    color: white;
    padding: 8px, 16px, 10px, 16px
  }
  .storybook-button--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  .storybook-button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  .storybook-button--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  .storybook-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }  
`;

export const Icon = styled.img`
  margin-right: 5px;
`;
