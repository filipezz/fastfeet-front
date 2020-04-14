import React, { useState, useEffect } from 'react';

import { DebounceInput } from 'react-debounce-input';
import { MdAdd, MdSearch } from 'react-icons/md';

import api from '../../services/api';

// eslint-disable-next-line
import StarterAvatar from '../../components/StarterAvatar';
import PopUp from '../../components/PopUp';
import Table from '../../components/Table';

import {
  Cancelada,
  Entregue,
  Pendente,
  Retirada,
  Container,
  Input,
  Button,
} from './styles';

export default function Encomendas() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/orders');

      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);

  async function handleChange(e) {
    if (e.target.value) {
      const response = await api.get('orders', {
        params: { q: e.target.value },
      });
      setDeliveries(response.data);
    } else {
      const response = await api.get('orders');
      setDeliveries(response.data);
    }
  }

  return (
    <>
      <Container>
        <h1>Gerenciando encomendas</h1>
        <div>
          <Input>
            <MdSearch size={16} color="#999" />
            <DebounceInput
              onChange={handleChange}
              debounceTimeout={400}
              type="text"
              placeholder="Buscar por encomendas"
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
            <th>Destinatário</th>
            <th>Entregador</th>
            <th>Cidade</th>
            <th>Estado</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {deliveries.map((delivery) => (
            <tr key={delivery.id}>
              <td>#{delivery.id}</td>

              <td>{delivery.recipient.name}</td>
              <td>
                <span>
                  <StarterAvatar name={delivery.deliveryman.name} />
                  {delivery.deliveryman.name}
                </span>
              </td>
              <td>{delivery.recipient.city}</td>
              <td>{delivery.recipient.city}</td>
              <td>
                {delivery.canceled_at ? (
                  <Cancelada>●CANCELADA</Cancelada>
                ) : delivery.end_date ? (
                  <Entregue>●ENTREGUE</Entregue>
                ) : delivery.start_date && !delivery.end_date ? (
                  <Retirada>●RETIRADA</Retirada>
                ) : (
                  <Pendente>●PENDENTE</Pendente>
                )}
              </td>

              <td>
                <PopUp
                  visualizar="Visualizar"
                  editar="Editar"
                  excluir="Excluir"
                  delivery={delivery}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}
