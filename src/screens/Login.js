import React, { useContext, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from 'react-native-button';
import { ActionSheetContext } from 'react-native-propel-kit';

import { Layout } from '../components/Login/Layout';
import { LegalAgreement } from '../components/Login/LegalAgreement';

const Title = styled.Text`
  text-align: center;
  font-size: 24px;
  color: #111;
  margin-bottom: 10px;
`;

const MessageSigIn = styled.Text`
  text-align: right;
  color: #3291ff;
`;

const Text = styled.Text`
  text-align: right;
  color: #111;
`;

const Input = styled.TextInput`
  width: 300px;
  height: 40px;
  border: 1px solid #eaeaea;
  border-radius: 20px;
  background-color: #fafbfc;
`;

const Wrap = styled.View`
  margin-top: 25px;
`;

const Login = props => {
  const {
    navigation: { navigate }
  } = props;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [indexBt, setIndexBt] = useState(null);
  const actionSheet = useContext(ActionSheetContext);

  const showModal = buttonIndex => {
    if (buttonIndex !== 0) {
      setIsModalVisible(true);
      setIndexBt(buttonIndex);
    }
  };

  const closeModal = () => {
    if (indexBt === 1) {
      setIsModalVisible(false);
      navigate('Anonymous');
    }
    if (indexBt === 2) {
      setIsModalVisible(false);
      navigate('Confidential');
    }
    if (indexBt === 3) {
      setIsModalVisible(false);
      navigate('TestCase');
    }
  };

  const showActionSheet = useCallback(() => {
    actionSheet.showWithOptions(
      {
        title: '¿Qué necesitas?',
        options: ['Cancel', 'Anonimo', 'Confidencial', 'Caso prueba'],
        cancelButtonIndex: 0
      },
      buttonIndex => {
        showModal(buttonIndex);
      },
      [actionSheet]
    );
  });
  return (
    <Layout>
      <Wrap>
        <Title>usuario</Title>
        <Input keyboardType={'email-address'} />
      </Wrap>
      <Wrap>
        <Title>contraseña</Title>
        <Input />
      </Wrap>
      <Wrap>
        <Text>
          ¿olvide contraseña?{'  '}
          <MessageSigIn onPress={() => navigate('SignIn')}>
            nuevo usuario
          </MessageSigIn>
        </Text>
      </Wrap>
      <Wrap>
        <Button
          style={{ color: '#fff' }}
          containerStyle={{
            flex: 1,
            padding: 10,
            borderRadius: 10,
            backgroundColor: '#000',
            marginTop: 35
          }}
          onPress={showActionSheet}
        >
          registro de eventos criticos
        </Button>
        <LegalAgreement
          isModalVisible={isModalVisible}
          closeModal={closeModal}
        />
      </Wrap>
    </Layout>
  );
};

Login.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Login;
