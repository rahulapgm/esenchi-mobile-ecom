import React, {PureComponent} from "react";

import {View, Text} from "react-native";
import {cartItemsObj} from "./testdata";

import CartComponent from "../../../components/Pages/Cart";

export class Cart extends PureComponent {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		this._unsubscribe = this.props.navigation.addListener("focus", () => {
			console.log("Cart Tab Focused!\n");
		});
	}

	componentWillUnmount() {
		this._unsubscribe();
	}

	onScreenFocus = () => {
		console.log("Cart Tab Focused!\n");
	};
	render() {
		return <CartComponent cartItemsObj={cartItemsObj} {...this.props} />;
	}
}

export default Cart;
