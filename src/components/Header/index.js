import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import logo from '../../assets/fastfeet-logo.png';
import { Container, Content, Profile, StyledLink } from './styles';

import { signOut } from '../../store/modules/auth/actions';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);
  function handleSignOut() {
    dispatch(signOut());
  }
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Fastfeet" />
          <aside>
            <div>
              <StyledLink to="/encomendas">Encomendas</StyledLink>
              <StyledLink to="/entregadores">Entregadores</StyledLink>
              <StyledLink to="/destinatarios">Destinatários</StyledLink>
              <StyledLink to="/problemas">Problemas</StyledLink>
            </div>

            <Profile>
              <div>
                <strong>{profile.name}</strong>
                <Link onClick={handleSignOut} to="/">
                  Sair do sistema
                </Link>
              </div>
            </Profile>
          </aside>
        </nav>
      </Content>
    </Container>
  );
}
