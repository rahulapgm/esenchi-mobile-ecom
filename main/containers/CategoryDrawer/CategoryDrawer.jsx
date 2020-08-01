import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CategoryDrawerComponent from "../../components/CategoryDrawer/CategoryDrawer";

import { makeSelectCategoryList } from "./selectors";

import { getCategoryList } from "./actions";

export class CategoryDrawer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener("focus", () => {
      if (!this.props.categoryList.length) {
        this.props.fetchCategoryList();
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <CategoryDrawerComponent {...this.props} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  categoryList: makeSelectCategoryList()
});

const mapDispatchToProps = dispatch => {
  return {
    fetchCategoryList: () => dispatch(getCategoryList())
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(CategoryDrawer);
