import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  },
  input: {
    flex: 1,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FDFCFE',
    height: 56,
    marginTop: 24,
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#31CF67',
    borderRadius: 5,
    height: 56,
    width: 56,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',
  },
});