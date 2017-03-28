import React, {PropTypes} from 'react'
import {TouchableOpacity, Text, StyleSheet} from 'react-native'
import Dimensions from 'Dimensions';

const NavButton = (props) => {
	return (
		<TouchableOpacity style={styles.button} onPress={props.buttonHandler}>
			<Text style={styles.label}>{props.destLabel}</Text>
		</TouchableOpacity>
	)
}

NavButton.propTypes = {
	destLabel: PropTypes.string.isRequired,
	buttonHandler: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
	button: {
		padding: 15,
		backgroundColor: '#3C5773',
		alignSelf: 'stretch',
		width: Dimensions.get('window').width/3
	},
	label: {
		color: '#F4F4E9',
		textAlign: 'center'
	}
})

export default NavButton
