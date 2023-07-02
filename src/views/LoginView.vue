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
                                    <input v-model="email"  type="email" placeholder="Seu email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input v-model="senha" type="password" placeholder="Sua Senha" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="mb-3 d-flex justify-content-evenly">
                                    <button type="submit" class="btn btn-light" @click="login()">Entrar</button>
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

export default defineComponent({
    name: 'LoginView',
    data() {
        return {
            usuario: new UsuarioModel(),
            email: '',
            senha: ''
        }
    },
    methods: {
        onClickLogin() {
            UsuarioClient.cadastrar(this.usuario).then(success => {
                this.usuario = new UsuarioModel();

            }).catch(error => {
                
            })
        },
        login(){
            console.log(this.email)
            console.log(this.senha)
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







<!-- <div class="container justify-content-center">
    <div class="card col-5">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    </div>
</div> -->