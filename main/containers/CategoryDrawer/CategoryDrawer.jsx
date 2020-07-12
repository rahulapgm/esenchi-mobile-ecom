import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import CategoryDrawerComponent from "../../components/CategoryDrawer/CategoryDrawer";

import { makeSelectCategoryList } from "./selectors";

export class CategoryDrawer extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.categoryList) {
      console.log("categoryList from CategoryDrawer", this.props.categoryList);
    }
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

const mapDispatchToProps = () => { return {} };

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps
);

export default compose(withConnect)(CategoryDrawer);
