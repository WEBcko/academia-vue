import axios from 'axios';

// Função para configurar o cabeçalho de autorização com o token JWT
const setAuthorizationHeader = (token : any) => {
  if (token) {
    localStorage.setItem('userToken', token);
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    console.log(token)
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthorizationHeader;
