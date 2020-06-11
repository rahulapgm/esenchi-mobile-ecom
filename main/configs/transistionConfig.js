import {Animated, Easing} from "react-native";

export const transitionConfig = () => {
	return {
		transitionSpec: {
			duration: 500,
			easing: Easing.out(Easing.poly(4)),
			timing: Animated.timing,
			useNativeDriver: true,
		},
		screenInterpolator: (sceneProps) => {
			const {layout, position, scene} = sceneProps;

			const thisSceneIndex = scene.index;
			const width = layout.initWidth;

			const translateX = position.interpolate({
				inputRange: [thisSceneIndex - 1, thisSceneIndex],
				outputRange: [width, 0],
				extrapolate: "clamp",
			});

			return {
				transform: [{translateX}],
			};
		},
	};
};

export default transitionConfig;
