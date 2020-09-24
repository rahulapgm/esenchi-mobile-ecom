import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator
} from "react-native";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import Product from "./Product/Product";

import { getProductsListOnCategory, clearProductsFromStore } from "./actions";

import {
  makeSelectProductList,
  makeSelectIsAllDocumentLoaded,
  makeSelectProductListLoader
} from "./selectors";

import SkeletonComponent from "../../components/custom/Skeleton/Skeleton";

import toJS from "../../hoc/toJS/toJS";

export class ProductListing extends React.PureComponent {
  constructor(props) {
    super(props);
    this.startPage = 0;
    this.onEndReachedCalledDuringMomentum = true;
  }

  componentDidMount() {
    const { route } = this.props;
    let { subCategoryItem = "Category Page" } = route && route.params;
    this.props.navigation.setOptions({ title: subCategoryItem });
    if (subCategoryItem.indexOf("(") > -1) {
      subCategoryItem = subCategoryItem.slice(0, subCategoryItem.indexOf("("));
    }

    const callObj = {
      searchKey: subCategoryItem,
      startPage: this.startPage
    };
    this.subCategoryItem = subCategoryItem;

    this.props.getProducts(callObj);

    this._unsubscribe = this.props.navigation.addListener("blur", () => {
      this.startPage = 0;
      this.props.clearProductsFetched();
    });
  }

  _handleLoadMore = () => {
    if (!this.props.isAllDocumentLoaded) {
      let { startPage } = this;

      startPage = this.startPage + 1;

      this.startPage = startPage;
      const callObj = {
        searchKey: this.subCategoryItem,
        startPage
      };

      this.props.getProducts(callObj);
    }
  };

  _renderFooter = () => {
    if (!this.props.showProductListLoader) return null;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: 12
        }}
      >
        <ActivityIndicator animating size="large" />
        <Text>{`   Loading more products..`}</Text>
      </View>
    );
  };

  render() {
    if (!this.props.productList.length && this.props.showProductListLoader) {
      return <SkeletonComponent text={"Thank You for Using eSenchi.."} />;
    }

    else if (!this.props.productList.length && !this.props.showProductListLoader) {
      return (
        <View style={{paddingVertical:24}}>
          <Text style={{textAlign:"center"}}>
            Uff! No product available for '{this.subCategoryItem}', Sorry..
          </Text>
        </View>
      );
    }

    return (
      <React.Fragment>
        <SafeAreaView style={styles.container}>
          <FlatList
            data={this.props.productList}
            renderItem={({ item, index }) => (
              <Product product={item} {...this.props} />
            )}
            keyExtractor={item => item.productId}
            onEndReached={() => {
              if (
                !this.props.showProductListLoader &&
                this.props.productList.length > 6
              ) {
                this._handleLoadMore();
              }
            }}
            onEndReachedThreshold={0.5}
            ListFooterComponent={this._renderFooter}
          />
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor:"#fafafa"
  }
});

const mapStateToProps = createStructuredSelector({
  productList: makeSelectProductList(),
  isAllDocumentLoaded: makeSelectIsAllDocumentLoaded(),
  showProductListLoader: makeSelectProductListLoader()
});

const mapDispatchToProps = dispatch => {
  return {
    getProducts: data => {
      dispatch(getProductsListOnCategory(data));
    },
    getProductsOnScroll: data => {
      dispatch(getProductListOnScroll(data));
    },
    clearProductsFetched: () => {
      dispatch(clearProductsFromStore());
    }
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(toJS(ProductListing));
