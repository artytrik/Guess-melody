import axios from 'axios';

const Error = {
  UNAUTHORIZED: 401
};

export const createAPI = (onUnauthrized) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-3.appspot.com/guess-melody`,
    timeout: 5000,
    withCredentials: true
  });

  const onSucess = (response) => {
    return response;
  };

  const onFail = (err) => {
    const {response} = err;

    if (response.status === Error.UNAUTHORIZED) {
      onUnauthrized();

      throw err;
    }

    throw err;
  };

  api.interceptors.response.use(onSucess, onFail);

  return api;
};

