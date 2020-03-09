// Packages
import React, { useContext } from 'react';
import { StyleSheet, TextInput } from 'react-native';

// Components
import { Header } from '../../UI/Header';
import { Layout } from '../../UI/Layout';
import { Content } from '../../UI/Content';
import { Label } from '../../UI/Label';

// Context
import { ConfiContext } from '../../../context/ConfiContext';

const ResponsableRoute = () => {
  const user = useContext(ConfiContext);
  return (
    <Layout>
      <Header title="Opcional - Datos del médico responsable" />
      <Content>
        <Label>CFP</Label>
        <TextInput
          value={user.cfp}
          onChangeText={text => user.setCfp(text)}
          style={styles.formInput}
          placeholder="Ingrese su número de seguro social"
        />
        <Label>CRM</Label>
        <TextInput
          value={user.crm}
          onChangeText={text => user.setCrm(text)}
          style={styles.formInput}
          placeholder="Ingrese su CRM"
        />
        <Label>Nombre</Label>
        <TextInput
          value={user.name}
          onChangeText={text => user.setName(text)}
          style={styles.formInput}
          placeholder="Ingrese su nombre"
        />
        <Label>Email</Label>
        <TextInput
          value={user.email}
          onChangeText={text => user.setEmail(text)}
          style={styles.formInput}
          placeholder="Ingrese su email"
          keyboardType="email-address"
        />
      </Content>
    </Layout>
  );
};

const styles = StyleSheet.create({
  formInput: {
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 4,
    marginBottom: 10,
    paddingLeft: 15,
    height: 40
  }
});

export { ResponsableRoute };
