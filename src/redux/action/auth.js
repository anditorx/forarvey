import Axios from 'axios';
import {API_HOST} from '../../config';
import {toast, storeDataStorage} from '../../utils';
import {setLoading} from './global';

export const setUser = (value) => {
  return {type: 'SET_USER', value};
};

export const setToken = (value) => {
  return {type: 'SET_TOKEN', value};
};

export const signInAction = (form, navigation) => (dispatch) => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url_api}/login`, form)
    .then((res) => {
      const token = `${res.data.data.token_type} ${res.data.data.access_token}`;
      const resDataUser = res.data.data.user;
      dispatch(setLoading(false));
      storeDataStorage('@user', resDataUser);
      dispatch(setUser(resDataUser));
      storeDataStorage('@token', {
        value: token,
      });
      dispatch(setToken(token));
      toast('Berhasil', 'Berhasil masuk ke aplikasi', 'success');
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch((err) => {
      console.log('erorSignin : ', JSON.stringify(err));
      dispatch(setLoading(false));
      toast('Gagal', 'Register gagal!');
    });
};
