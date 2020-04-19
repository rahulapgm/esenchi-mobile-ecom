import React from "react";

import {
	View,
	Text,
	ScrollView,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

import ShadowBox from "../../../hoc/ShadowBox";
import Dropdown from "../../custom/Dropdown";
import Button from "../../custom/Button";

export class Cart extends React.Component {
	constructor(props) {
		super(props);
		this.vegetables = [];
		this.groceries = [];
		this.others = [];
	}

	// {
	// 		id: 8,
	// 		productId: 17,
	// 		productName: "Black Channa - Kadala",
	// 		productCategory: "Groceries",
	// 		productSubCategory: "",
	// 		quantitySelected: "1",
	// 		quantityUnit: "KG",
	// 		productImgUrl:
	// 			"http://fb48495671d2d91cd8e6-fcdd7c10a736b671537f0d814c4bbb93.r71.cf1.rackcdn.com/891.jpg",
	//		mrpRate:"38",
	// 		sellingPrice: "32",
	// 		discountInRs: "3",
	// 		availableQuantities: [
	// 			"500 grams - 18 Rs",
	// 			"1 KG - 32 Rs",
	// 			"2 KG - 60 Rs",
	// 			"3 KG - 88 Rs",
	// 			"4 KG - 110 Rs",
	// 		],
	// 	}

	alertOnRemove = (obj) => {
		console.log(obj.productName);
		return Alert.alert(
			null,
			"Do you want to remove '" + obj.productName + "' from Cart?",
			[
				{
					text: "No",
					onPress: () => console.log("No Pressed"),
					style: "cancel",
				},
				{
					text: "Yes",
					onPress: () => console.log("Yes Pressed"),
				},
			],
			{ cancelable: true }
		);
	};

	renderItemMarkup = (obj) => {
		return (
			<ShadowBox
				style={{ flexDirection: "row", padding: 6, flex: 1 }}
				key={obj.id}>
				<View
					style={{
						flexDirection: "column",
						flex: 0.36,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<Image
						style={{ width: "100%", height: "72%" }}
						source={{
							uri: obj.productImgUrl,
						}}
					/>
				</View>
				<View style={{ flexDirection: "column", flex: 1, paddingHorizontal: 12 }}>
					<View
						style={{
							flexDirection: "row",
							flex: 1,
							paddingVertical: 6,
						}}>
						<Text
							style={{
								flex: 1,
								justifyContent: "flex-start",
								alignItems: "flex-start",
								fontSize: 16,
								fontWeight: "bold",
							}}>
							{obj.productName}
						</Text>

						<TouchableOpacity
							onPress={() => {
								this.alertOnRemove(obj);
							}}
							style={{
								justifyContent: "flex-end",
								alignItems: "flex-end",
								fontSize: 16,
								fontWeight: "bold",
								color: "blue",
							}}>
							<MaterialCommunityIcons
								name="close-circle"
								color="#7c8780"
								size={24}
							/>
						</TouchableOpacity>
					</View>

					{obj.mrpRate !== obj.sellingPrice && (
						<View
							style={{
								flexDirection: "row",
								paddingVertical: 6,
							}}>
							<Text style={{ color: "blue" }}>
								Selling Price: {obj.sellingPrice} Rs. {"  "}
								<Text
									style={{
										color: "grey",
										textDecorationLine: "line-through",
										textDecorationStyle: "solid",
									}}>
									MRP. {obj.mrpRate}
								</Text>
							</Text>
						</View>
					)}

					<View
						style={{
							flexDirection: "row",
							flex: 1,
							paddingVertical: 6,
							alignItems: "center",
						}}>
						<Text>Quantity:</Text>
						<View
							style={{
								flex: 0.88,
								paddingHorizontal: 6,
								alignItems: "center",
							}}>
							<Dropdown />
						</View>
					</View>
				</View>
			</ShadowBox>
		);
	};
	renderOrderSummary = () => {
		return (
			<ShadowBox
				style={{ flexDirection: "column", flex: 1, paddingHorizontal: 6 }}>
				<View style={{ flexDirection: "row", flex: 1 }}>
					<Text
						style={{
							flex: 1,
							textAlign: "center",
							paddingVertical: 6,
							fontWeight: "bold",
							fontSize: 16,
						}}>
						ORDER SUMMARY
					</Text>
				</View>
				<View style={{ flexDirection: "row", flex: 1 }}>
					<Text
						style={{
							flex: 1,
							textAlign: "left",
							fontWeight: "bold",
							fontSize: 14,
							color: "blue",
						}}>
						Total Amount:{" "}
						<Text
							style={{
								color: "grey",
								textDecorationLine: "line-through",
								textDecorationStyle: "solid",
							}}>
							{" "}
							190 Rs.{" "}
						</Text>
						150 Rs.
					</Text>
					<Text
						style={{
							flex: 0.6,
							textAlign: "right",
							paddingRight: 6,
							fontSize: 14,
							color: "#11bd47",
							fontWeight: "bold",
						}}>
						You saved 40 Rs.
					</Text>
				</View>
				<Text
					style={{
						flex: 0.5,
						paddingTop: 6,
						fontWeight: "bold",
						textAlign: "left",
					}}>
					Delivery address:
					<Text style={{ fontWeight: "normal" }}>
						{" "}
						Near CA High School, Peruvemba, Palakkad, Pin:678531
					</Text>
				</Text>
				<TouchableOpacity
					onPress={() => {
						this.props.navigation.navigate("ChangeAddress");
					}}>
					<Text style={{ color: "#1a75ff", textDecorationLine: "underline" }}>
						Change Address
					</Text>
				</TouchableOpacity>
			</ShadowBox>
		);
	};
	render () {
		const { cartItemsObj } = this.props;
		cartItemsObj.map((obj) => {
			if (obj.productCategory === "Vegetables") {
				const vegItem = this.renderItemMarkup(obj);
				this.vegetables.push(vegItem);
			} else if (obj.productCategory === "Groceries") {
				const groceryItem = this.renderItemMarkup(obj);
				this.groceries.push(groceryItem);
			} else {
				this.others.push(this.renderItemMarkup(obj));
			}
		});
		return (
			<View style={{ flex: 1 }}>
				<ScrollView>
					{this.renderOrderSummary()}
					{this.vegetables.length > 0 && (
						<ShadowBox>
							<Text
								style={{
									textAlign: "center",
									paddingVertical: 6,
									fontWeight: "bold",
									fontSize: 16,
								}}>
								VEGETABLES
							</Text>
							{this.vegetables}
						</ShadowBox>
					)}

					{this.groceries.length > 0 && (
						<ShadowBox>
							<Text
								style={{
									textAlign: "center",
									paddingVertical: 6,
									fontWeight: "bold",
									fontSize: 16,
								}}>
								GROCERIES
							</Text>
							{this.groceries}
						</ShadowBox>
					)}

					{this.others.length > 0 && (
						<ShadowBox>
							<Text
								style={{
									textAlign: "center",
									paddingVertical: 6,
									fontWeight: "bold",
								}}>
								OTHERS
							</Text>
							{this.others}
						</ShadowBox>
					)}
				</ScrollView>
				<Button
					onPress={() => {
						console.log("checkout clicked!");
						this.props.navigation.navigate("Checkout");
					}}
					isGradient={true}
					gradStart={[0, 0.5]}
					gradEnd={[1, 0.5]}
					gradColors={["#2c22f2", "#2d23ed", "#0a00ff"]}
					gradStyle={{ borderRadius: 5 }}
					viewStyle={{ margin: 2 }}
					textStyle={{
						padding: 12,
						textAlign: "center",
						color: "white",
						fontWeight: "bold",
						fontSize: 16,
					}}
					btnText="Checkout"
				/>
			</View>
		);
	}
}

export default Cart;
