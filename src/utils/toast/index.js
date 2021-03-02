import {showMessage} from 'react-native-flash-message';
import {colors} from '../colors';

export const toast = (message, desc, type) => {
  showMessage({
    message: message,
    description: desc,
    type: type,
    backgroundColor: type == 'success' ? colors.primary : colors.red,
  });
};
