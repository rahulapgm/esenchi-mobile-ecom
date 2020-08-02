import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { List, Checkbox } from "react-native-paper";

import ShadowBox from "../../hoc/ShadowBox";

import * as RootNavigation from "../../../RootNavigation";

export class CategoryDrawer extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      expandedCategoryId: null
    };
  }

  _handlePress = (categoryId) =>
    this.setState({
      expandedCategoryId: categoryId
    });

  render() {
    const { categoryList } = this.props;

    return (
      <ScrollView>
        <SafeAreaView
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <List.Section
            title="Categories"
            style={{
              flex: 1,
              width: "100%",
              backgroundColor: "",
              color: "blue"
            }}
            titleStyle={{
              color: "blue"
            }}
          >
            {categoryList &&
              categoryList.map((item) => {
                return (
                  <ShadowBox
                    key={item.categoryId}
                    style={{ margin: 1, borderRadius: 0, padding: 2 }}
                  >
                    <List.Accordion
                      title={item.categoryName}
                      expanded={this.state.expandedCategoryId===item.categoryId}
                      onPress={() => {
                        if(this.state.expandedCategoryId === item.categoryId){
                          this._handlePress(null)
                        } else {
                          this._handlePress(item.categoryId)
                        }
                      }}
                      >
                      {item.subCategoryList &&
                        item.subCategoryList.map(subCategoryItem => {
                          return (
                            <TouchableOpacity
                              key={subCategoryItem}
                              onPress={() => {
                                this.props.navigation.toggleDrawer();
                                this.props.navigation.navigate(
                                  "ProductListing",
                                  {
                                    screen: "CategoryListing",
                                    params: {
                                      categoryName: item.categoryName,
                                      subCategoryItem
                                    }
                                  }
                                );
                              }}
                            >
                              <List.Item
                                title={subCategoryItem}
                                style={{ paddingLeft: 24 }}
                              />
                            </TouchableOpacity>
                          );
                        })}
                      <TouchableOpacity
                        onPress={() => {
                          this.props.navigation.toggleDrawer();
                          this.props.navigation.navigate("ProductListing", {
                            screen: "CategoryListing",
                            params: {
                              pageType:"categoryLanding",
                              categoryName: item.categoryName,
                              subCategoryItem: item.categoryName
                            }
                          });
                        }}
                      >
                        <List.Item
                          title="View All"
                          style={{ paddingLeft: 24 }}
                          titleStyle={{ fontWeight: "bold" }}
                        />
                      </TouchableOpacity>
                    </List.Accordion>
                  </ShadowBox>
                );
              })}
          </List.Section>
        </SafeAreaView>
      </ScrollView>
    );
  }
}

export default CategoryDrawer;
