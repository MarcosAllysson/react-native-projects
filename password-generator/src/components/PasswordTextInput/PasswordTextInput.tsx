import React from 'react';
import { TextInput } from 'react-native';
import styles from './PasswordTextInputStyles';
import PasswordTextInputProps from './PasswordTextInputProps';

const PasswordTextInput = (props: PasswordTextInputProps) => {
	return (
		<>
			<TextInput
				style={styles.container}
				placeholder='password'
				multiline={true}
				readOnly={true}
				value={props.password}
			/>
		</>
	);
};

export default PasswordTextInput;
