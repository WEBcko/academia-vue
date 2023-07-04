<template>
    <div class="row">
        <div class="col-12 col-sm-6">
            <div class="row">
                <div class="col d d-flex align-items-center justify-content-center">
                    <div class="d-flex  align-items-start flex-column w-75 h-50">
                        <h1>LOGIN</h1>

                        <form class="f">
                            <div class="mb-3 ">
                                <label for="exampleInputEmail1" class="form-label">Username</label>
                                <input v-model="loginRequest.username" type="text" placeholder="Seu Username"
                                    class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                            </div>
                            <div class="mb-3 ">
                                <label for="exampleInputPassword1" class="form-label">Password</label>
                                <input v-model="loginRequest.senha" type="password" placeholder="Sua Senha"
                                    class="form-control" id="exampleInputPassword1">
                            </div>
                            <div class="mb-3 d-flex justify-content-evenly">
                                <button type="submit" class="btn btn-success"
                                    @click.prevent="onClickLogin()">Entrar</button>
                                <RouterLink to="/cadastrar" type="button" class="btn btn-light">Cadastrar</RouterLink>
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
import AuthClient from "@/client/AuthClient";
import setAuthorizationHeader  from "@/client/axios-config";
import router from '@/router';
export default defineComponent({
    name: 'LoginView',
    data() {
        return {
            loginRequest: new LoginRequest()

        }
    },
    methods: {
        onClickLogin() {
            AuthClient.login(this.loginRequest).then(success => {
                console.log(success)

                const token = success; //1

                 localStorage.setItem('userToken', token);//2

                 //const tokenLocal = localStorage.getItem('userToken')//3

                // Configure o cabeçalho de autorização com o token JWT
                setAuthorizationHeader(token);//4
                router.push('/dashboard');
            }).catch(error => {
                return Promise.reject(error.response)
            })

            router.push("/dashboard")
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


@media (max-width:425px) {
    .d {
        background-color: #236F5C;
    }
}
</style>
