import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import { toast } from 'react-toastify';
import { MdKeyboardArrowLeft, MdCheck } from 'react-icons/md';
import { Container, Header, Button, Select, Input } from './styles';

import api from '../../../services/api';
import history from '../../../services/history';

export default function EdiçãoEncomendas({ match }) {
  const [recipient, setRecipient] = useState(null);
  const [deliveryman, setDeliveryman] = useState(null);
  const [product, setProduct] = useState();
  const [currentDelivery, setCurrentDelivery] = useState('');

  useEffect(() => {
    async function loadCurrentDelivery() {
      const response = await api.get(`orders/${match.params.id}`);
      const delivery = response.data;

      setCurrentDelivery(delivery);
      setRecipient(delivery.recipient);
      setDeliveryman(delivery.deliveryman);
      setProduct(currentDelivery.product);
    }
    loadCurrentDelivery();
  }, []);

  const loadRecipientOptions = async (input) => {
    const response = await api.get('/recipients', {
      params: {
        q: input,
      },
    });
    return response.data.map((recipients) => ({
      label: recipients.name,
      ...recipients,
    }));
  };

  const loadDeliverymanOptions = async (input) => {
    const response = await api.get('/deliveryman', {
      params: {
        q: input,
      },
    });
    return response.data.map((deliveryman) => ({
      label: deliveryman.name,
      ...deliveryman,
    }));
  };

  async function handleSubmit(e) {
    try {
      await api.put(`orders/${match.params.id}`, {
        product,
        recipient_id: recipient.id,
        deliveryman_id: deliveryman.id,
      });
      toast.success('Dados alterados com sucesso');
    } catch (err) {
      toast.error('Ocorreu um erro. Tente novamente mais tarde');
    }
  }

  function handleGoBack() {
    history.push('/encomendas');
  }
  function handleInputChange(e) {
    if (e.target.length === 0) {
      setProduct(currentDelivery.product);
    }
    setProduct(e.target.value);
  }
  return (
    <>
      <Header>
        <h1>Edição de encomendas</h1>
        <div>
          <Button onClick={handleGoBack}>
            {' '}
            <MdKeyboardArrowLeft size={20} color="#fff" /> VOLTAR
          </Button>
          <Button primary onClick={handleSubmit}>
            <MdCheck size={20} color="#fff" /> SALVAR
          </Button>
        </div>
      </Header>
      <Container>
        <div>
          {currentDelivery ? (
            <>
              {' '}
              <Select>
                <label htmlFor="destinatário">Destinatário</label>
                <AsyncSelect
                  name="destinatário"
                  cacheOptions
                  value={recipient}
                  onChange={(current) => setRecipient(current)}
                  defaultInputValue={currentDelivery.recipient.name}
                  onMenuOpen={() => setRecipient(null)}
                  defaultOptions
                  loadOptions={loadRecipientOptions}
                />
              </Select>
              <Select>
                <label htmlFor="entregador">Entregador</label>
                <AsyncSelect
                  name="entregador"
                  cacheOptions
                  value={deliveryman}
                  onChange={(current) => setDeliveryman(current)}
                  defaultInputValue={currentDelivery.deliveryman.name}
                  onMenuOpen={() => setDeliveryman(null)}
                  defaultOptions
                  loadOptions={loadDeliverymanOptions}
                />
              </Select>{' '}
            </>
          ) : (
            ''
          )}
        </div>

        <Input>
          <label htmlFor="produto">Nome do Produto</label>
          <input
            onChange={handleInputChange}
            name="produto"
            placeholder={
              currentDelivery ? currentDelivery.product : 'Loading...'
            }
            type="text"
          />
        </Input>
      </Container>
    </>
  );
}
