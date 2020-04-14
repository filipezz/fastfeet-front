import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  h1 {
    color: #444;
  }
  div {
    display: flex;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  background: ${(props) => (props.primary ? '#7d40e7' : '#ccc')};
  border: 0;
  border-radius: 4px;
  color: #fff;
  height: 36px;
  padding: 9px 20px;
  margin-left: 16px;

  svg {
    margin-right: 5px;
  }
`;
export const Container = styled.div`
  background: #fff;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  & > div {
    display: flex;
  }
  label {
    font-weight: bold;
    margin-bottom: 9px;
  }
`;
export const Select = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & + div {
    margin-left: 30px;
  }
  label {
    font-weight: bold;
    margin-bottom: 9px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;

  input {
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 45px;
    padding: 12px 15px;
  }
`;
