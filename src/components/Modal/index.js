import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Modal({ delivery, problem }) {
  return (
    <Container>
      {delivery ? (
        <>
          {' '}
          <div>
            <strong>Informações da encomenda</strong>
            <p>{delivery.recipient.street}</p>
            <p>{delivery.recipient.city}</p>
            <p>{delivery.recipient.zip}</p>
          </div>
          <div>
            <strong>Datas</strong>
            <p>
              <span>Retirada:</span>{' '}
              {delivery.start_date ? (
                <span>{delivery.start_date}</span>
              ) : (
                <span>--------</span>
              )}
            </p>
            <p>
              <span>Entrega:</span>{' '}
              {delivery.end_date ? (
                <span>{delivery.end_date}</span>
              ) : (
                <span>--------</span>
              )}
            </p>
          </div>
          <div>
            <strong>Assinatura do usuário</strong>
            <article />
          </div>
        </>
      ) : (
        <>
          <strong> Descrição do problema:</strong>
          <p>{problem}</p>
        </>
      )}
    </Container>
  );
}
Modal.propTypes = {
  delivery: PropTypes.objectOf(PropTypes.any),
  problem: PropTypes.string,
};
Modal.defaultProps = {
  delivery: null,
  problem: null,
};
