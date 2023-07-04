<template>
    <div class="row">
        <div class="col a col-sm-3"></div>
        <div class="col-12 col-sm-9 d d-flex align-items-center justify-content-center">

            <div class="w-75 h-75 ">
                <h1>CADASTRO</h1>

                <div v-if="mensagem.ativo" class="row">
                    <div class="col-md-12 text-start">
                        <div :class="mensagem.css" role="alert">
                            <strong>{{ mensagem.titulo }}</strong> {{ mensagem.mensagem }}
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    </div>
                </div>

                <nav>
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <button class="nav-link active link-dark nav-tam" id="nav-home-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                            aria-selected="true">Login</button>
                        <!-- <button class="nav-link link-dark nav-tam" id="nav-profile-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile"
                            aria-selected="false">Informacoes</button>
                        <button class="nav-link link-dark nav-tam" id="nav-contact-tab" data-bs-toggle="tab"
                            data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact"
                            aria-selected="false">Dados pessoais</button> -->
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"
                        tabindex="0">
                        <div class="w-75">
                            <form class="f">
                                <div class="mb-3 ">
                                    <label for="exampleInputNome1" class="form-label">Nome</label>
                                    <input type="email" v-model="usuarioRequest.nome" class="form-control" id="exampleInputNome1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleInputTelefone1" class="form-label">Telefone</label>
                                    <input type="email" v-model="usuarioRequest.telefone" class="form-control" id="exampleInputTelefone1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleInputEmail1" class="form-label">Email</label>
                                    <input type="email" v-model="usuarioRequest.email" class="form-control" id="exampleInputEmail1"
                                        aria-describedby="emailHelp">
                                </div>
                                <div class="mb-3 ">
                                    <label for="exampleInputPassword1" class="form-label">Senha</label>
                                    <input type="password" v-model="usuarioRequest.senha" class="form-control" id="exampleInputPassword1">
                                </div>
                                <div class="col-12">
                                    <div class="row w-75 div-button">
                                        <div class="col">
                                            <button class="btn btn-light button-cadastrar"
                                                @click.prevent="onClickCadastrar()">Cadastrar</button>
                                        </div>
                                        <div class="col">
                                            <RouterLink to="/login" type="button" class="btn btn-success ">Voltar
                                            </RouterLink>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab"
                        tabindex="0">
                        <form class="f">
                            <form class="row g-3 needs-validation w-75" novalidate>
                                <div class="col-md-12">
                                    <label for="validationCustom01" class="form-label">Peso</label>
                                    <input type="text" class="form-control" id="validationCustom01" required>
                                    <div class="valid-feedback">
                                        Looks good!
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <label for="validationCustom03" class="form-label">Altura</label>
                                    <input type="text" class="form-control" id="validationCustom03" required>
                                    <div class="invalid-feedback">
                                        Please provide a valid phone.
                                    </div>
                                </div>
                            </form>
                        </form>

                    </div>
                    <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"
                        tabindex="0">
                        <div>
                            <div class="f">
                                <form class="row g-3 needs-validation w-75 dados-form" novalidate>
                                    <div class="col-md-12">
                                        <label for="validationCustom01" class="form-label">Primeiro nome</label>
                                        <input type="text" class="form-control" id="validationCustom01" value="Mark"
                                            required>
                                        <div class="valid-feedback">
                                            Looks good!
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationCustom03" class="form-label">Telefone</label>
                                        <input type="text" class="form-control" id="validationCustom03" required>
                                        <div class="invalid-feedback">
                                            Please provide a valid phone.
                                        </div>
                                    </div>
                                    <div class="d-flex justify-content-between">
                                        <div class="col-md-4 small-input">
                                            <label for="validationCustom03" class="form-label">CPF</label>
                                            <input type="text" class="form-control" id="validationCustom03" required>
                                            <div class="invalid-feedback">
                                                Please provide a valid CPF.
                                            </div>
                                        </div>
                                        <div class="col-md-7 medium-imput">
                                            <label for="validationCustom03" class="form-label">Data nascimento</label>
                                            <input type="text" class="form-control" id="validationCustom03" required>
                                            <div class="invalid-feedback">
                                                Please provide a valid CPF.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex justify-content-between">
                                        <div class="col-md-6 small-input">
                                            <label for="validationCustom05" class="form-label">CEP</label>
                                            <input type="text" class="form-control" id="validationCustom05" required>
                                            <div class="invalid-feedback">
                                                Please provide a valid CEP.
                                            </div>
                                        </div>
                                        <div class="col-md-5 medium-imput">
                                            <label for="validationCustom05" class="form-label">Num.Casa</label>
                                            <input type="text" class="form-control" id="validationCustom05" required>
                                            <div class="invalid-feedback">
                                                Coloque o numero da casa.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="invalidCheck"
                                                required>
                                            <label class="form-check-label" for="invalidCheck">
                                                Agree to terms and conditions
                                            </label>
                                            <div class="invalid-feedback">
                                                You must agree before submitting.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="row w-75 div-button">
                                            <div class="col">
                                                <button class="btn btn-light button-cadastrar">Cadastrar</button>
                                            </div>
                                            <div class="col">
                                                <RouterLink to="/login" type="button" class="btn btn-success ">Voltar</RouterLink>       
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { UsuarioRequest } from '@/models/UsuarioRequestModel';
import { defineComponent, resolveComponent } from 'vue';
import CadastrarClient from '@/client/CadastrarClient'
import router from '@/router';
import { useRouter } from 'vue-router';


export default defineComponent({
    name: 'CadastroView',
    data() {
        return {
            usuarioRequest: new UsuarioRequest(),
            mensagem: {
                ativo: false as boolean,
                titulo: "" as string,
                mensagem: "" as string,
                css: "" as string
            }
        }
    },
    methods: {
        onClickCadastrar() {
            CadastrarClient.cadastrar(this.usuarioRequest).then(success => {
                this.usuarioRequest = new UsuarioRequest();

                this.mensagem.ativo = true;
                this.mensagem.mensagem = success;
                this.mensagem.titulo = "Boa ";
                this.mensagem.css = "alert alert-success alert-dismissible fade show";

                this.handleSubmit();
            }).catch(error => {


                this.mensagem.ativo = true;
                this.mensagem.mensagem = error.data;
                this.mensagem.titulo = "Error. ";
                this.mensagem.css = "alert alert-danger alert-dismissible fade show";
                console.log(error)
            })
        },
        async handleSubmit() {
            // Lógica de manipulação do envio do formulário

            // Aguarde 2 segundos antes de navegar para a outra rota
            await new Promise(resolve => setTimeout(resolve, 2000));

            //vai para a roto declarada abaixo
            router.push('/login');
        }
    }

});
</script>

<style scoped lang="scss">
.d {
    height: 100vh;
    background-color: #236F5C;
}

.a {
    background-color: rgb(255, 255, 255);
}

.row {
    --bs-gutter-x: 0rem;
}

.f {
    width: 100%;
}

.button {
    // width: 100px;
}

.nav {
    --bs-nav-link-padding-x: 0.5rem;
    --bs-nav-link-padding-y: 0.5rem;
}

@media (max-width:767px) {
    .dados-form .small-input {
        width: 25%;
    }

    .dados-form .medium-imput {
        width: 50%;
    }


}

@media (max-width:425px) {
    .d {
        background-color: #236F5C;
    }

    .button-cadastrar {
        margin-right: 10px;
    }


}

@media (max-width:375px) {
    .d {
        background-color: #236F5C;
    }

    .button-cadastrar {
        margin-right: 10px;
    }

    .div-button {
        width: 100% !important;
    }

}
</style>
