import React from 'react';

import { TextInput, Divider, Button, Menu } from 'react-native-paper';

import ShadowBox from '../../../hoc/ShadowBox/ShadowBox';

export const ChangeAddress = (props) => {
  const [text, setText] = React.useState('');

  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);

  const [pinCode, setPinCode] = React.useState('');

  return (
    <ShadowBox>
      <TextInput
        label="Name(പേര്)*:"
        autoFocus={true}
        value={text}
        onChangeText={text => setText(text)}
        style={{backgroundColor: "white"}}
        required
      />
      <TextInput
        label="House Name/Ward No/Flat No(വീടുപേര്‍)*:"
        value={text}
        onChangeText={text => setText(text)}
        style={{backgroundColor: "white", paddingTop:12}}
        required
      />
      <TextInput
        label="Street/Locality(തെരുവ്/പ്രദേശം)*:"
        value={text}
        onChangeText={text => setText(text)}
        style={{backgroundColor: "white", paddingTop:12}}
        required
      />
      <TextInput
        label="Panchayath/Muncipality(ഗ്രാമം)*:"
        value={text}
        onChangeText={text => setText(text)}
        style={{backgroundColor: "white", paddingTop:12}}
        required
      />
      <TextInput
        label="Pincode(പിൻ കോഡ്)*:"
        value={text}
        onChangeText={text => setText(text)}
        maxLength={6}
        keyboardType="number-pad"
        style={{backgroundColor: "white", paddingTop:12}}
        required
      />

      {/* <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Button onPress={openMenu}>Press</Button>
          }>
          <Menu.Item onPress={() => {}} title="Item 1" />
          <Menu.Item onPress={() => {}} title="Item 2" />
          <Divider />
          <Menu.Item onPress={() => {}} title="Item 3" />
        </Menu> */}

      <Button mode="contained" style={{margin:12}} onPress={()=>{}}>Save Address</Button>

    </ShadowBox>
  )
}

export default ChangeAddress;
