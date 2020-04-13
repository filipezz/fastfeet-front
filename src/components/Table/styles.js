import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.table`
  width: 100%;
  border-spacing: 0 20px;
  color: #444;
  td > button {
    background: 0;
    border: 0;
    font-weight: bolder;
    font-size: 20px;
    color: #c6c6c6;
    transition: color 0.1s, font-size 0.1s ease-in-out, transform 0.1s;

    &:hover {
      color: ${darken(0.8, '#c6c6c6')};
      font-size: 23px;
      transform: translateY(-3px);
    }
  }
  th {
    text-align: left;
    border-radius: 4px;
    padding: 0 10px;
  }

  tbody tr {
    height: 57px;
    background: #fff;
    color: #666;
  }
  th:first-child {
    width: 75px;
  }

  th:last-child {
    width: 50px;
  }

  td:first-of-type {
    border-radius: 4px 0 0 4px;
    padding: 16px 20px;
  }
  td:last-of-type {
    border-radius: 0 4px 4px 0;
    text-align: center;
  }
  span {
    display: flex;
    align-items: center;
    & > div {
      margin-right: 10px;
    }
  }
`;
