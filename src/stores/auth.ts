// import {defineStore} from 'pinia';
// import { ref } from 'vue';

// const useAuth = defineStore('auth',() =>{

//     const token = ref(localStorage.getItem("token"));
//     //const user = ref(JSON.parse(localStorage.getItem("user")));


//     function setToken(tokenValue : string){
//         localStorage.setItem('token',tokenValue);
//         token.value = tokenValue;
//     }

//     function setUser(userValue : string){
//         localStorage.setItem('user',userValue);
//         token.value = userValue;
//     }

//     return{
//         setToken,
//         setUser
//     }

// })

// export default useAuth();


// import  axios from 'axios';

// const setAuthorization = (token : any) =>{
//     if(token){
//         axios.defaults.headers.common['Authorization']
//     }
// }

