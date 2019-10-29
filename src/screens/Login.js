/* eslint-disable react/jsx-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import Button from 'react-native-button';
import { ActionSheetCustom as ActionSheet } from 'react-native-actionsheet';

import { Layout } from '../components/Login/Layout';

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

const MessageInfo = styled.Text`
  text-align: right;
  color: #111;
`;

const MessageSheet = styled.Text`
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

class Login extends Component {
  constructor(props) {
    super(props);

    this.showActionSheet = this.showActionSheet.bind(this);
    this.showDemo = this.showDemo.bind(this);
    this.options = [
      'Cancel',
      <MessageSheet>Anonimo</MessageSheet>,
      <MessageSheet>Confidencial</MessageSheet>,
      <MessageSheet>Caso de prueba</MessageSheet>
    ];
  }
  showActionSheet() {
    this.ActionSheet.show();
  }
  showDemo(index) {
    const {
      navigation: { navigate }
    } = this.props;
    if (index === 1) {
      navigate('Anonymous');
    }
    if (index === 2) {
      navigate('Confidential');
    }
    if (index === 3) {
      navigate('TestCase');
    }
  }
  render() {
    const {
      navigation: { navigate }
    } = this.props;
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
          <MessageInfo>
            ¿olvide contraseña?{'  '}
            <MessageSigIn onPress={() => navigate('SignIn')}>
              nuevo usuario
            </MessageSigIn>
          </MessageInfo>
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
            onPress={this.showActionSheet}
          >
            registro de eventos criticos
          </Button>
          <ActionSheet
            ref={o => (this.ActionSheet = o)}
            title={'¿Qué necesitas ?'}
            options={this.options}
            cancelButtonIndex={0}
            destructiveButtonIndex={4}
            onPress={index => this.showDemo(index)}
          />
        </Wrap>
      </Layout>
    );
  }
}

Login.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Login;
