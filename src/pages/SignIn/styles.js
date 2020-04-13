import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #7d40e7;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  display: flex;
  background: #fff;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 4px;
  box-shadow: #00000333 0 0 10px;
  padding: 60px 30px;
  img {
    margin-bottom: 23px;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  label {
    color: #444;
    font-weight: bold;
    margin-bottom: 9px;
    margin-top: 15px;
  }
  input {
    border-radius: 4px;
    border: 2px solid #ddd;
    height: 45px;
    padding: 12px 15px;
    margin: 0 0 10px;
    transition: border 0.3s ease-in-out;

    &:focus {
      border: 2px solid #7d40e7;
    }
    &::placeholder {
      color: #999;
    }
  }
  button {
    background: #7d40e7;
    border-radius: 4px;
    border: 0;
    color: #fff;
    font-weight: bold;
    height: 45px;
    font-size: 16px;
    transition: 0.2s;

    &:hover {
      background: #fff;
      border: 2px solid #7d40e7;
      color: #7d40e7;
    }
  }
`;
