import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #ffffff;
  border-bottom: 1px solid #dddddd;
  padding: 0 30px;
`;
export const Content = styled.div`
  height: 64px;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    img {
      height: 32px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      color: #999;
      font-weight: bold;
      margin-right: 21px;
    }
  }
  aside {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  }
`;
const activeClassName = 'nav-item-active';

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  &.${activeClassName} {
    color: #444;
  }
`;
export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;
  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #3c3c3b;
    }
    a {
      display: block;
      margin-top: 5px;
      margin-right: 0;
      font-size: 12px;
      color: #de3b3b;
      font-weight: normal;
    }
  }
`;
