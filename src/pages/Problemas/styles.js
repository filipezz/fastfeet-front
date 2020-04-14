import styled from 'styled-components';

export const Container = styled.div`
  color: #444;
  display: flex;
  flex-direction: column;
  margin-bottom: 21px;
  h1 {
    margin-bottom: 34px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const Input = styled.div`
  position: relative;
  svg {
    position: absolute;
    top: 11px;
    left: 15px;
  }
  input {
    border: 1px solid #ddd;
    height: 36px;

    border-radius: 4px;
    padding: 9px 40px;
  }
`;
export const Button = styled.button`
  display: flex;
  border: 0;
  height: 36px;
  border-radius: 4px;
  background: #7d40e7;
  color: #fff;
  font-weight: bold;
  padding: 9px 16px;
  width: 142px;
`;
