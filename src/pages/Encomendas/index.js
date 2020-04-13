import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import PopUp from '../../components/PopUp';

import { Cancelada, Entregue, Pendente, Retirada } from './styles';

import StarterAvatar from '../../components/StarterAvatar';
import Table from '../../components/Table';

export default function Encomendas() {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    async function loadDeliveries() {
      const response = await api.get('/orders');

      setDeliveries(response.data);
    }
    loadDeliveries();
  }, []);

  return (
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
  );
}
