import React, { useState, useEffect } from 'react';

import Table from '../../components/Table';
import api from '../../services/api';

import PopUp from '../../components/PopUp';

export default function Encomendas() {
  const [recipients, setRecipients] = useState([]);

  useEffect(() => {
    async function loadRecipients() {
      const response = await api.get('recipients');

      setRecipients(response.data);
    }
    loadRecipients();
  }, []);

  return (
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
              {destinatario.street}, {destinatario.number}, {destinatario.city}{' '}
              - {destinatario.state}
            </td>
            <td>
              <PopUp editar="Editar" excluir="Excluir" />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
