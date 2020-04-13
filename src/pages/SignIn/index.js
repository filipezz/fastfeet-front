import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import logo from '../../assets/fastfeet-logo.png';
import { Container, Content } from './styles';

import { signInRequest } from '../../store/modules/auth/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }
  return (
    <Container>
      <Content>
        <img src={logo} alt="Fastfeet" />
        <Form onSubmit={handleSubmit}>
          <label htmlFor="email">SEU E-MAIL</label>
          <Input
            name="email"
            type="email"
            placeholder="exemplo@email.com"
            value="admin@fastfeet.com"
          />
          <label htmlFor="password">SUA SENHA</label>
          <Input name="password" type="password" placeholder="**************" />
          <button type="submit">Entrar no sistema</button>
        </Form>
      </Content>
    </Container>
  );
}
