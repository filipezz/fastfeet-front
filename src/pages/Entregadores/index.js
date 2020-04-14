import React, { useState, useEffect } from 'react';

import { DebounceInput } from 'react-debounce-input';
import { MdAdd, MdSearch } from 'react-icons/md';

import api from '../../services/api';
import PopUp from '../../components/PopUp';

import { Container, Input, Button } from './styles';

import Table from '../../components/Table';
// eslint-disable-next-line
import StarterAvatar from '../../components/StarterAvatar';

export default function Entregadores() {
  const [deliverymen, setDeliverymen] = useState([]);

  useEffect(() => {
    async function loadDeliverymen() {
      const response = await api.get('deliveryman');

      setDeliverymen(response.data);
    }
    loadDeliverymen();
  }, []);

  async function handleChange(e) {
    if (e.target.value) {
      const response = await api.get('deliveryman', {
        params: { q: e.target.value },
      });
      setDeliverymen(response.data);
    } else {
      const response = await api.get('deliveryman');
      setDeliverymen(response.data);
    }
  }

  return (
    <>
      <Container>
        <h1>Gerenciando entregadores</h1>
        <div>
          <Input>
            <MdSearch size={16} color="#999" />
            <DebounceInput
              onChange={handleChange}
              debounceTimeout={400}
              type="text"
              placeholder="Buscar por entregadores"
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
            <th>Foto</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliverymen.map((entregador) => (
            <tr key={entregador.id}>
              <td>#{entregador.id}</td>
              <td>
                <StarterAvatar name={entregador.name} />
              </td>
              <td>{entregador.name}</td>
              <td>{entregador.email}</td>
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
