import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3e6dd',
  },
  header: {
    height: '8%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'red',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '500',
  },
  userInfoText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '300',
    marginVertical: 2,
  },
  backArrowImg: {
    width: 30,
    height: 15,
    padding: 5,
  },
});

export default styles;