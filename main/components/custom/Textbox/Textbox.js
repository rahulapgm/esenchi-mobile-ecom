import React, { useState } from "react";
import PropTypes from "prop-types";
import { LinearGradient } from "expo";
import { View, TextInput } from "react-native";

const Textbox = props => {
  const BLUE = "#428AF8";
  const LIGHT_GRAY = "#D3D3D3";
  const RED = "#e53935";

  const [isFocused, updateFocus] = useState(false);
  const {
    viewStyle,
    textInputStyle = { padding: 6, fontSize: 14, height: 48 },
    isError = false,
    disabled,
    ...others
  } = props;
  if (!disabled) {
    return (
      <React.Fragment>
        <TextInput
          selectionColor={BLUE}
          style={textInputStyle}
          underlineColorAndroid={
            isFocused ? (isError ? RED : BLUE) : LIGHT_GRAY
          }
          onFocus={() => {
            updateFocus(true);
          }}
          onBlur={() => {
            updateFocus(false);
          }}
          {...others}
        />
      </React.Fragment>
    );
  } else {
    return (
      <View>
        <TextInput placeholder="hello world" disabled />
      </View>
    );
  }
};

export default Textbox;
