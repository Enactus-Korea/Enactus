import React, {PropTypes} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Dimensions from 'Dimensions';

import NavButton from './NavButton'

const FirstScreen = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>First Screen</Text>
			<View style={styles.bottom}>
				<NavButton style={styles.navbtn} destLabel="Second" buttonHandler={props.onButtonPress} />
				<NavButton style={styles.navbtn} destLabel="Third" buttonHandler={props.onThirdPress} />
				<NavButton style={styles.navbtn} destLabel="Modal" buttonHandler={props.onModalButtonPress} />
			</View>
		</View>
	)
}

FirstScreen.propTypes = {
	onButtonPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2F9CB2',
		justifyContent: 'space-around',
		alignItems: 'center'
	},
	title: {
		fontSize: 24,
		fontWeight: '500',
		color: '#ffffff',
		marginBottom: 30
	},
	bottom: {
		width: Dimensions.get('window').width,
		flexDirection: 'row',
		justifyContent: 'space-between'
	}
})

export default FirstScreen
