import AsyncStorage from '@react-native-async-storage/async-storage';
import {toast} from '../toast';

export const storeDataStorage = async (storageKey, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(storageKey, jsonValue);
  } catch (e) {
    // saving error
    toast('Oops!', 'Unsuccess save data to localstorage');
  }
};

export const getDataStorage = async (storageKey) => {
  try {
    const jsonValue = await AsyncStorage.getItem(storageKey);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    toast('Oops!', 'Unsuccess save data to localstorage');
  }
};
