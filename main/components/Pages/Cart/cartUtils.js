alertOnRemove = obj => {
  console.log(obj.productName);
  return Alert.alert(
    null,
    "Do you want to remove '" + obj.productName + "' from Cart?",
    [
      {
        text: "No",
        onPress: () => console.log("No Pressed"),
        style: "cancel"
      },
      {
        text: "Yes",
        onPress: () => console.log("Yes Pressed")
      }
    ],
    { cancelable: true }
  );
};
