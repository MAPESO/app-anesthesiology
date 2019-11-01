import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';
import Button from 'react-native-button';

const ModalContent = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 20px;
`;

const Title = styled.Text`
  color: #111;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin: 20px;
`;

const P = styled.Text`
  color: #111;
`;

const LegalAgreement = ({ isModalVisible, closeModal }) => {
  return (
    <Modal isVisible={isModalVisible}>
      <ModalContent>
        <Title>Sistema de eventos criticos</Title>
        <P>
          El Sistema de Notificación de Incidentes de Anestesia (SRIA) fue
          implementado por la Sociedad de Anestesiología del Estado de São Paulo
          (SAESP) con el objetivo de reforzar las iniciativas para promover la
          Seguridad del Paciente.
        </P>
        <P>
          SRIA es el resultado de una asociación entre Anesthesia Quality
          Institute (AQI) y SAESP. AQI, el creador del sistema de notificación
          de incidentes (AIRS), cedió todo el sistema de forma gratuita, además
          de compartir el conocimiento tecnológico y la experiencia adquirida
          con AIRS.
        </P>
        <P>
          La información presentada en SRIA se transmite a un servidor de forma
          segura, encriptada y mantenida bajo protección de acceso externo, lo
          que garantiza la confidencialidad de la información. Además, SAESP no
          puede revelar legalmente a la institución, paciente o médico
          involucrado en los informes recibidos.
        </P>
        <P>
          En los informes presentados de manera confidencial, un miembro del
          Comité de Seguridad del Paciente de SAESP puede contactar al autor
          notificador.
        </P>
        <Button
          style={{ color: '#fff', textTransform: 'uppercase' }}
          containerStyle={{
            padding: 10,
            height: 40,
            width: 300,
            borderRadius: 10,
            backgroundColor: '#3291FF',
            marginTop: 35
          }}
          onPress={closeModal}
        >
          Ok
        </Button>
      </ModalContent>
    </Modal>
  );
};

LegalAgreement.propTypes = {
  isModalVisible: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
};

export { LegalAgreement };
