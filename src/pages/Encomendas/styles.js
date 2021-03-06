import styled from 'styled-components';

export const Cancelada = styled.strong`
  border-radius: 12px;
  display: inline-block;
  padding: 4px 7px;
  background: #fab0b0;
  color: #de3b3b;
`;

export const Entregue = styled.strong`
  border-radius: 12px;
  display: inline-block;
  padding: 4px 7px;
  background: #dff0df;
  color: #2ca42b;
`;
export const Pendente = styled.strong`
  border-radius: 12px;
  display: inline-block;
  padding: 4px 7px;
  background: #f0f0df;
  color: #c1bc35;
`;
export const Retirada = styled.strong`
  border-radius: 12px;
  display: inline-block;
  padding: 4px 7px;
  background: #bad2ff;
  color: #4d85ee;
`;
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
