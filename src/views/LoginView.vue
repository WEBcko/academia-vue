<template>
    <div class="row">
        <div class="col-5">
            <div class="">
                <div class="row">
                    <div class="col-6 d d-flex align-items-center justify-content-center">
                        <div class="d-flex  align-items-start flex-column w-75 h-50">
                            <h1>LOGIN</h1>
                            <hr />
                            <div v-if="mensagem.ativo" class="row">
                                <div class="col-md-12 text-start">
                                    <div :class="mensagem.css" role="alert">
                                        <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                                        <button type="button" class="btn-close" data-bs-dismiss="alert"
                                            aria-label="Close"></button>
                                    </div>
                                </div>
                            </div>

                            <form class="f">
                                <div class="mb-3 ">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="mb-3 d-flex justify-content-evenly">
                                    <button type="submit" class="btn btn-light">Entrar</button>
                                    <RouterLink to="/cadastrar" type="button" class="btn btn-success">Cadastrar</RouterLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-7 a">
        </div>
    </div>
</template>

<script lang="ts">
import { UsuarioModel } from '@/models/UsuarioModel';
import { defineComponent } from 'vue';
import UsuarioClient from '@/client/usuario.client';

export default defineComponent({
    name: 'LoginView',
    data() {
        return {
            usuario: new UsuarioModel(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
        }
    },
    methods: {
        onClickLogin() {
            UsuarioClient.cadastrar(this.usuario).then(success => {
                this.usuario = new UsuarioModel();

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Dale.";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";
            }).catch(error => {
                this.mensagem.ativo = true;
                this.mensagem.mensagem = error;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
            })
        }
    }
});
</script>

<style scoped lang="scss">
.d {
    height: 100vh;
    width: 35vw;
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