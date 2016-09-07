import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  navHeader: {
		backgroundColor: '#5e5e5e',
	},
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 24,
    width: 24,
    margin: Platform.OS === 'ios' ? 10 : 16,
  },
  menu: {
    height: 24,
    width: 24,
    margin: Platform.OS === 'ios' ? 10 : 16,
    marginLeft: 15,
  },
})
