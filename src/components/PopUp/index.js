import React from 'react';
import PropTypes from 'prop-types';

import { MdRemoveRedEye, MdDeleteForever, MdModeEdit } from 'react-icons/md';

import Popup from 'reactjs-popup';
import Modal from '../Modal';

import { PopupContent } from './styles';

export default function PopUp({
  visualizar,
  editar,
  excluir,
  delivery,
  problem,
}) {
  const popUpStyle = {
    background: '#FFF',
    border: 0,
    borderRadius: ' 4px',
    boxShadow: '0px 0px 2px #00000026',
  };

  return (
    <Popup
      // eslint-disable-next-line
      trigger={(open) => <button  type="button">...</button>}
      position="bottom center"
      closeOnDocumentClick
      contentStyle={popUpStyle}
    >
      <PopupContent>
        {visualizar ? (
          <Popup
            contentStyle={popUpStyle}
            trigger={
              <button type="button">
                <MdRemoveRedEye size={20} color="#8E5BE8" />
                {visualizar}
              </button>
            }
            modal
            closeOnDocumentClick
          >
            <Modal problem={problem} delivery={delivery} />
          </Popup>
        ) : (
          ''
        )}
        {editar ? (
          <button type="button">
            <MdModeEdit size={20} color="#4D85EE" />
            {editar}
          </button>
        ) : (
          ''
        )}

        <button type="button">
          <MdDeleteForever size={20} color="#DE3B3B" />
          {excluir}
        </button>
      </PopupContent>
    </Popup>
  );
}

PopUp.propTypes = {
  visualizar: PropTypes.string,
  editar: PropTypes.string,
  excluir: PropTypes.string.isRequired,
  delivery: PropTypes.objectOf(PropTypes.any),
  problem: PropTypes.string,
};
PopUp.defaultProps = {
  visualizar: '',
  editar: '',
  delivery: null,
  problem: '',
};
