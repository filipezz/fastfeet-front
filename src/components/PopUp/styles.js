import styled from 'styled-components';
import { darken } from 'polished';

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;

  button {
    color: #999;
    background: 0;
    border: 0;
    display: flex;
    align-items: center;
    padding: 15px 15px;

    transition: background 0.2s, font-weight 0.1s;
    svg {
      margin-right: 7px;
    }
    &:hover {
      background: ${darken(0.03, '#fff')};
      font-weight: bolder;
    }
  }
  button + button {
    border-top: 1px solid #eee;
  }
`;
