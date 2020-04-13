import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import DashboardHeader from '../../../components/DashboardHeader';

import history from '../../../services/history';
import { Content } from './styles';

export default function DefaultLayout({ children }) {
  const location = history.location.pathname.substr(1);

  return (
    <>
      <Header />
      <Content>
        <DashboardHeader page={location} />
        {children}
      </Content>
    </>
  );
}
DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
