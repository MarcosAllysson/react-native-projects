import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard';

import styles from './PasswordButtonStyles';
import PasswordTextInput from '../PasswordTextInput/PasswordTextInput';
import generatePassword from '../../services/passwordService';

const PasswordButton = () => {
	const [password, setPassword] = useState('');
	// const [copiedText, setCopiedText] = useState('');

	const handleGeneratePasswordButton = () => {
		let generatedPassword = generatePassword();
		setPassword(generatedPassword);
	};

	// expo > Clipboard
	const handleCopyToClipboard = async () => {
		await Clipboard.setStringAsync(password);
	};

	// const fetchCopiedText = async () => {
	// 	const text = await Clipboard.getStringAsync();
	// 	setCopiedText(text);
	// };

	return (
		<>
			<PasswordTextInput password={password} />

			<Pressable onPress={handleGeneratePasswordButton} style={styles.button}>
				<Text style={styles.text}>GENERATE</Text>
			</Pressable>

			<Pressable onPress={handleCopyToClipboard} style={styles.button}>
				<Text style={styles.text}>⚡COPY</Text>
			</Pressable>
		</>
	);
};

export default PasswordButton;
