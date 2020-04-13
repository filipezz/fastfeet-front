import React from 'react';
import PropTypes from 'prop-types';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, Input, Button } from './styles';

export default function DashboardHeader({ page }) {
  return (
    <Container>
      <h1>Gerenciando {page}</h1>
      <div>
        <Input>
          <MdSearch size={16} color="#999" />
          <input type="text" placeholder={`Buscar por ${page}`} />
        </Input>

        <Button>
          <MdAdd size={16} color="#fff" />
          CADASTRAR
        </Button>
      </div>
    </Container>
  );
}
DashboardHeader.propTypes = {
  page: PropTypes.string.isRequired,
};
