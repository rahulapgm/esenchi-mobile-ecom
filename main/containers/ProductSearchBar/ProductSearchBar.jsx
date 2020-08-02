import * as React from "react";
import { Searchbar } from "react-native-paper";

const ProductSearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default ProductSearchBar;
