import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 5,
    // paddingHorizontal: 12,
    paddingLeft: 12,
    paddingRight: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
  },
  addressWrapper: {
    flexDirection: 'row',
  },
  addressText: {
    marginLeft: 10,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
    color: '#333',
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
