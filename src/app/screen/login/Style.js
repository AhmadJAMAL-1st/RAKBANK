import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: '10%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'rgba(52, 52, 52, 0)',
    justifyContent: 'space-between',
  },
  textView: {
    marginVertical: 20,
    flex: 3,
  },
  heading: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '400',
    marginLeft: 20,
    marginBottom: 10,
  },
  subHeading: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '300',
    marginLeft: 20,
    lineHeight: 22,
  },
  quickBalanceText: {
    color: '#28282B',
    fontSize: 12,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 10,
  },
  forgotText: {
    color: '#888888',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: 10,
    lineHeight: 20,
  },
  loginBtnView: {
    flex: 3,
    justifyContent: 'center',
  },

  imageBackground: {
    flex: 1,
    width: '100%',
    height: '60%',
    backgroundColor: '#f3e6dd',
    resizeMode:'cover'
  },
  fingerPrintImg: {
    width: 15,
    height: 20,
    marginHorizontal: 10,
  },
  backArrowImg: {
    width: 30,
    height: 15,
    padding: 5,
  },
});

export default styles;
