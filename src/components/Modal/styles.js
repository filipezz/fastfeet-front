import styled from 'styled-components';

export const Container = styled.section`
  background: #fff;
  padding: 25px;
  line-height: 26px;

  div {
    padding: 12px 0;
    width: 100%;
    text-align: left;
    display: flex;
    flex-direction: column;
  }
  div + div {
    border-top: 1px solid #eee;
  }
  strong {
    color: #444;
    font-size: 14px;
  }
  p {
    font-size: 16px;
    & > span:first-of-type {
      font-weight: bold;
    }
  }
  article {
    background: red;
    max-width: 100%;
    align-self: center;
  }
`;
