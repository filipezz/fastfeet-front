import React from 'react';
import logo from '../../assets/fastfeet-logo.png';
import { Container, Content } from './styles';

export default function SignIn() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Fastfeet" />
        <form>
          <label htmlFor="email">SEU E-MAIL</label>{' '}
          <input name="email" type="email" placeholder="exemplo@email.com" />{' '}
          <label htmlFor="password">SUA SENHA</label>{' '}
          <input name="password" type="password" placeholder="**************" />
          <button type="button">Entrar no sistema</button>
        </form>
      </Content>
    </Container>
  );
}
