import React, { useState, useEffect } from 'react';

import Table from '../../components/Table';
import PopUp from '../../components/PopUp';

import api from '../../services/api';

export default function Problemas() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function loadProblems() {
      const response = await api.get('deliveries/problems');
      setProblems(response.data);
    }
    loadProblems();
  }, []);

  return (
    <Table>
      <thead>
        <tr>
          <th>Encomenda</th>
          <th>Problema</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        {problems.map((problem) => (
          <tr key={problem.id}>
            <td>#{problem.id}</td>
            <td>{problem.description}</td>
            <td>
              <PopUp
                problem={problem.description}
                visualizar="Visualizar"
                excluir="Cancelar encomenda"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
