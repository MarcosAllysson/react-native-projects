import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

import React, { useEffect, useRef, useState } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';

import styles from './CameraScreenStyles';

const CameraScreen = () => {
	const [facing, setFacing] = useState<CameraType>('back');
	const [permission, requestPermission] = useCameraPermissions();
	// const cameraRef = useRef<CameraType>(null);

	useEffect(() => {
		(async () => {
			console.log();
		})();
	}, []);

	const toggleCameraFacing = () => {
		setFacing((current) => (current === 'back' ? 'front' : 'back'));
	};

	const takePicture = async () => {};

	// Camera permissions are still loading.
	if (!permission) {
		return (
			<View>
				<Text>You need to allow the use of camera.</Text>
			</View>
		);
	}

	// Camera permissions are not granted yet.
	if (!permission.granted) {
		return (
			<View style={styles.container}>
				<Text style={styles.message}>
					We need your permission to show the camera.
				</Text>
				<Button onPress={requestPermission} title='grant permission' />
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<CameraView
				style={styles.camera}
				facing={facing}
				ratio='16:9'
				flash='off'
			>
				<View style={styles.buttonContainer}>
					<TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
						<Text style={styles.text}>Flip Camera</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.takePhoto} onPress={takePicture}>
						<Text style={styles.takePhotoText}>Take picture</Text>
					</TouchableOpacity>
				</View>
			</CameraView>
		</View>
	);
};

export default CameraScreen;
