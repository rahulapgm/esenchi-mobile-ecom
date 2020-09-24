import React from "react";
import { SafeAreaView, StyleSheet, Modal, Text, Image } from "react-native";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import toJS from "../toJS/toJS";

import { makeSelectShowLoader } from "./selectors";

import { closeLoader } from "./actions";

export class Loader extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Modal style={styles.container} animationType="slide" visible={this.props.loaderVisibility}>
          <Text style={{top:80, textAlign:"center"}}>Loading....</Text>
          <SafeAreaView style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Image
            style={{ width: "100%", height: 240 }}
            source={require("../../../assets/gifs/esenchi-compact-loader-640.gif")}
            />

          </SafeAreaView>

        </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center"
  }
});

const mapStateToProps = createStructuredSelector({
  loaderVisibility: makeSelectShowLoader()
});

const mapDispatchToProps = dispatch => {
  return {
    closeLoader: () => {
      dispatch(closeLoader());
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(Loader));
