import React, { useState, useEffect } from 'react';

import api from '../../services/api';
import PopUp from '../../components/PopUp';

import Table from '../../components/Table';
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

  return (
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
  );
}
