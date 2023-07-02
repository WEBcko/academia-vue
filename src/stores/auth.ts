// import { defineStore } from 'pinia';
// import { ref } from "vue";
// import Test

// export const useAuth = defineStore('auth',() =>{
//     const token = ref(localStorage.getItem("token"));
//     const user = ref(localStorage.getItem("user"));

//     function setToken(tokenValue: any){
//         localStorage.setItem('token',tokenValue);
//         token.value = tokenValue;
//     }

//     function setUser(userValue : any){
//         localStorage.setItem('user', JSON.stringify(userValue));
//         user.value = userValue;
//     }

    // const isAuthenticated = computed(() =>{
    //     if(user.value){
    //         return user.value.
    //     }
    // })

    // async function checkToken(tokenAuth){
    //     try{
    //         const token = 'Bearer' + tokenAuth;
    //         const { data } = await UsuarioClient.cadastrar<>('/auth/verify',{
    //             headers:
    //         })
    //     }
    // }
// })