import React, { useState, useEffect } from 'react';

import { DebounceInput } from 'react-debounce-input';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container, Input, Button } from './styles';

import PopUp from '../../components/PopUp';
import Table from '../../components/Table';
import api from '../../services/api';

export default function Encomendas() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }
    loadRecipients();
  }, []);
  async function handleChange(e) {
    if (e.target.value) {
      const response = await api.get('recipients', {
        params: { q: e.target.value },
      });
      setRecipients(response.data);
    } else {
      const response = await api.get('recipients');
      setRecipients(response.data);
    }
  }

  return (
    <>
      <Container>
        <h1>Gerenciando destinatários</h1>
        <div>
          <Input>
            <MdSearch size={16} color="#999" />
            <DebounceInput
              onChange={handleChange}
              debounceTimeout={400}
              type="text"
              placeholder="Buscar por destinatários"
            />
          </Input>

          <Button>
            <MdAdd size={16} color="#fff" />
            CADASTRAR
          </Button>
        </div>
      </Container>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Endereço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {recipients.map((destinatario) => (
            <tr>
              <td>#{destinatario.id}</td>
              <td>{destinatario.name}</td>
              <td>
                {destinatario.street}, {destinatario.number},{' '}
                {destinatario.city} - {destinatario.state}
              </td>
              <td>
                <PopUp editar="Editar" excluir="Excluir" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
