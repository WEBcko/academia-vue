<template>
    <div class="row">
        <div class="col-12 col-sm-6">
                <div class="row">
                    <div class="col d d-flex align-items-center justify-content-center">
                        <div class="d-flex  align-items-start flex-column w-75 h-50">
                            <h1>LOGIN</h1>
                          
                            <form class="f">
                                <div class="mb-3 ">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input v-model="loginRequest.username"  type="email" placeholder="Seu email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input v-model="loginRequest.senha" type="password" placeholder="Sua Senha" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="mb-3 d-flex justify-content-evenly">
                                    <button type="submit" class="btn btn-light" @click="onClickLogin()">Entrar</button>
                                    <RouterLink to="/cadastrar" type="button" class="btn btn-success">Cadastrar</RouterLink>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
        <div class="a col col-sm-6">
        </div>
    </div>
</template>

<script lang="ts">

import { UsuarioModel } from '@/models/UsuarioModel';
import { defineComponent } from 'vue';
import UsuarioClient from '@/client/UsuarioClient';
import { LoginRequest } from '@/models/LoginRequestModel';
import setAuthorizationHeader from '../configs-axios/axios-config';
import AuthClient from "@/client/AuthClient";

export default defineComponent({
    name: 'LoginView',
    data() {
        return {
            loginRequest : new LoginRequest()

        }
    },
    methods: {
        onClickLogin() {
            AuthClient.login(this.loginRequest).then(success =>{
                // console.log(success);

                   // Realize a autenticação e obtenha o token JWT
                    const token = success; // Substitua com o seu token JWT

                    // Configure o cabeçalho de autorização com o token JWT
                    setAuthorizationHeader(token);


            }).catch(error =>{
                return Promise.reject(error.response)
            })
        }
    }
});
</script>

<style scoped lang="scss">
.d {
    height: 100vh;
    width: 45vw;
    background-color: #236F5C;
}

.a {
    background-color: rgb(255, 255, 255);
}

.f {
    width: 100%;
}

.row {
    --bs-gutter-x: 0rem;
}

.imagem {
    background-image: url(../assets/Rectangle-login.png);
    background-repeat: no-repeat;
}


@media (max-width:425px){
    .d{
        background-color: #236F5C;
    }
}
</style>
