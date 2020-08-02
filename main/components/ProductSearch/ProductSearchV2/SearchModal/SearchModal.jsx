import React from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  SafeAreaView
} from "react-native";

import { Button } from "react-native-paper";

import { Searchbar } from "react-native-paper";
import ShadowBox from "../../../../hoc/ShadowBox";

export const SearchModal = props => {
  const {
    modalVisible,
    setModalVisible,
    fetchSearchSuggestion,
    searchSuggestion
  } = props;

  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View>
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <SafeAreaView style={{ marginTop: 12 }}>
          <ShadowBox style={{ padding: 0, margin: 6 }}>
            <Searchbar
              placeholder="Search"
              autoFocus={true}
              onChangeText={text => {
                fetchSearchSuggestion({ searchKey: text });
              }}
              onSubmitEditing={event => {
                setModalVisible(!modalVisible);
                props.navigation.navigate("ProductListing", {
                  screen: "CategoryListing",
                  params: {
                    categoryName: event.nativeEvent.text,
                    subCategoryItem: event.nativeEvent.text
                  }
                });
              }}
            />
          </ShadowBox>
          {!searchSuggestion.length ? (
            <Text style={{ padding: 6, fontStyle: "italic" }}>
              No Suggestions Available..
            </Text>
          ) : (
            <Text style={{ padding: 6, fontStyle: "italic" }}>
              Below search suggestions might be useful..
            </Text>
          )}

          {searchSuggestion &&
            searchSuggestion.map(item => {
              return (
                <ShadowBox key={item}>
                  <TouchableOpacity
                    style={{
                      padding: 12
                    }}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                      props.navigation.navigate("ProductListing", {
                        screen: "CategoryListing",
                        params: {
                          categoryName: item,
                          subCategoryItem: item
                        }
                      });
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                </ShadowBox>
              );
            })}
          <Button
            icon="close-outline"
            mode="close"
            onPress={() => setModalVisible(!modalVisible)}
            style={{ marginTop: 32 }}
          >
            <Text>Close</Text>
          </Button>
        </SafeAreaView>
      </Modal>
    </View>
  );
};

export default SearchModal;
