import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default DismissKeyboard = ({ children }) => (
	<TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
		{children}
	</TouchableWithoutFeedback>
);