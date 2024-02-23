import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  name: {
    flex: 1,
    color: '#FFF',
    fontSize: 16,
    marginLeft: 16,
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#E23C44',
    borderRadius: 5,
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
})