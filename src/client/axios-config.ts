// import axios from 'axios';


// // Função para configurar o cabeçalho de autorização com o token JWT
// const setAuthorizationHeader = (token : any) => {
//   if (token) {
//     console.log("entrei na func setAthorizationToken");
//     console.log(token)
//     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//   } else {
//     delete axios.defaults.headers.common['Authorization'];
//   }
// };

// export default setAuthorizationHeader;

import axios, { AxiosInstance } from 'axios';

// Função para configurar o cabeçalho de autorização com o token JWT
const setAuthorizationHeader = (token: string) => {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
};

export default setAuthorizationHeader;

