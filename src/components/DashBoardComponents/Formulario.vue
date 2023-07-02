<template>

<div class="demo-app col-md-9 row formulario">

    <ul class="nav nav-tabs col-md-7">
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#" @click="onclickPessoais()">Dados Pessoais</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#" @click="onclickAntropometrico()">Dados Antropometricos</a>
        </li>
        <li class="nav-item">
            <a class="nav-link " aria-current="page" href="#" @click="onclickAluno()">Anamnse do Aluno</a>
        </li>
    </ul>
    
    <div class="dados-Pessoais col-md-7 mt-4" v-show="dadosPessoaisAtivar">

        <div class="nome col-md-9 d-flex flex-column">
            <label for="" class="labelTexto">Nome Completo:</label>
            <input type="text" class="col-md-10 form-control" placeholder="Nome completo">
        </div>
      
        <div class="col-md-12 d-flex mt-3">

            <div class="estadoCivil d-flex flex-column col-md-4">
                <label for="estadoCivilId" class="labelTexto">Estado Civil:</label>
                <select class="form-select" id="estadoCivilId">
                    <option selected>Selecione...</option>
                    <option value="1">Solteiro(a)</option>
                    <option value="2">Casado(a)</option>
                    <option value="3">Seperado(a)</option>
                    <option value="4">Divorciado(a)</option>
                    <option value="5">Viuvo(a)</option>
                </select>
            </div>
            <div class="genero d-flex flex-column col-md-4 ms-5">
                <label for="generoID" class="labelTexto">Genero:</label>                
                <select class="form-select" id="generoID" v-model="selectedOption" @change="updateVariable">
                    <option selected>Selecione...</option>
                    <option value="1">Masculino</option>
                    <option value="2">Feminino</option>
                    <option value="3" >{{ outroGenero }}</option>
                </select>                 
            </div>
            <div class="d-flex flex-column col-md-3 ms-2">
                 <label for="generoOutroID" class="labelTexto" v-if="minhaVariavel === '3'" >Se outro qual:</label>
                <input type="text" id="generoOutroID" placeholder="genero ..." class="form-control"  v-if="minhaVariavel === '3'">
            </div>  
            
        </div>
    
        <div class="col-md-12 d-flex mt-3">
            <div class="cpf d-flex flex-column col-md-4">
                <label for="cpfID" class="labelTexto">CPF:</label>
                <input type="text" id="cpfID" placeholder="123.456.789-01" class="form-control">
            </div>

            <div class="telefone d-flex flex-column col-md-4 ms-5">
                <label for="telefoneID" class="labelTexto">Telefone:</label>
                <input type="text" id="telefoneID" placeholder="(045)123456789" class="form-control">
            </div>
        </div>

        <div class="col-md-12 d-flex mt-3">
            <div class="idade d-flex flex-column col-md-4">
                <label for="idadeInput" class="labelTexto">Idade:</label>
                <input type="number" id="idadeInput" class="form-control" v-model="idadeOption" @change="abreMenorIdade">
            </div>
            <div class="dataNascimento d-flex flex-column col-md-4 ms-5">
                <label for="nascimentoInput" class="labelTexto ">Data de Nascimento:</label>
                <input type="date" id="nascimentoInput" class="form-control">
            </div>

        </div>
    
        <div class="endereco d-flex flex-column col-md-9 mt-3">
            <label for="endereoID" class="labelTexto">Endereço:</label>
            <input type="text" id="enderecoID" placeholder="Endereço" class="form-control">
        </div>

    </div>

    <div class="dados-antropometricos col-md-7 mt-4" v-show="dadosAntropometricosAtivar">

        <div class="col-md-12 d-flex">

            <div class="peso d-flex flex-column col-md-4">
                <label for="pesoID" class="labelTexto">Peso:</label>
                <input type="number" id="pesoID" placeholder="00,00Kg" class="form-control">
            </div>
            <div class="altura d-flex flex-column ms-3 col-md-4">
                <label for="alturaID" class="labelTexto">Altura:</label>
                <input type="number" id="alturaID" placeholder="0,00M" class="form-control">
            </div>
            <div class="imc d-flex flex-column ms-3 col-md-4">
                <label for="imcID" class="labelTexto">IMC:</label>
                <input type="number" id="imcID" placeholder="00,00(IMC)" class="form-control">
            </div>
            
        </div>

        <div class="col-md-12 d-flex mt-3">

            <div class="masaMagra d-flex flex-column col-md-4">
                <label for="magraID" class="labelTexto">Massa magra:</label>
                <input type="number" id="magraID" placeholder="00,0%" class="form-control"> 
            </div>
            <div class="masaGorda d-flex flex-column ms-3 col-md-4">
                <label for="goradaID" class="labelTexto">Massa gorda:</label>
                <input type="number" id="gordaID" placeholder="00,0%" class="form-control">
            </div>
            <div class="massaMuscular d-flex flex-column ms-3 col-md-4">
                <label for="muscaularID" class="labelTexto">Massa muscular:</label>
                <input type="number" id="muscularID" placeholder="00,0%" class="form-control">
            </div>
            

        </div>

        <div class="col-md-12 d-flex mt-3">
            <div class="percentual d-flex flex-column col-md-4">
                <label for="percenID" class="labelTexto">Percentual de gordura:</label>
                <input type="number" id="percenID" placeholder="Percentual de gordura %" class="form-control">
            </div>
            <div class="circuQuadril d-flex flex-column ms-3 col-md-4">
                <label for="quadrilID" class="labelTexto">Circunferencia do quadril:</label>
                <input type="number" id="quadrilID" placeholder="Circunferencia do Quadril cm" class="form-control">
            </div>
            <div class="circuCintura d-flex flex-column ms-3 col-md-4">
                <label for="cinturaID" class="labelTexto">Circunferencia da cintura:</label>
                <input type="number" id="cinturaID" placeholder="Circunferencia da Cintura cm" class="form-control">
            </div>
            
        </div>

        <div class="col-md-12 d-flex mt-3">
            <div class="aguaCorporal d-flex flex-column col-md-4">
                <label for="aguaCorporalID" class="labelTexto">Agua Corporal:</label>
                <input type="number" id="aguaCorporalID" placeholder="Agua Corporal %" class="form-control">
            </div>
            <div class="Metabolismobasal d-flex flex-column ms-3 col-md-4">
                <label for="MetabolismobasalID" class="labelTexto">Metabolismo basal:</label>
                <input type="number" id="MetabolismobasalID" placeholder="Metabolismo basal" class="form-control">
            </div>
            <div class="Massavisceral d-flex flex-column ms-3 col-md-4">
                <label for="MassavisceralID" class="labelTexto">Massa visceral:</label>
                <input type="number" id="MassavisceralID" placeholder="Massa visceral" class="form-control">
            </div>
        </div>

        <div class="col-md-12 d-flex mt-3">
            <div class="Circunferenciadobraço d-flex flex-column col-md-4">
                <label for="CircunferenciadobraçoID" class="labelTexto">Circunferência do braço:</label>
                <input type="number" id="CircunferenciadobraçoID" placeholder="Circunferência do braço" class="form-control">
            </div>
            <div class="Circunferenciadacoxa d-flex flex-column ms-3 col-md-4">
                <label for="CircunferenciadacoxaID" class="labelTexto">Circunferência da coxa:</label>
                <input type="number" id="CircunferenciadacoxaID" placeholder="Circunferência da coxa" class="form-control">
            </div>
            <div class="Circunferenciadapanturrilha d-flex flex-column ms-3 col-md-4    ">
                <label for="CircunferenciadapanturrilhaID" class="labelTexto">Circunferência da panturilha:</label>
                <input type="number" id="CircunferenciadapanturrilhaID" placeholder="Circunferência da panturilha" class="form-control">
            </div>
        </div>

        
        
        
        
    </div>

    <div class="anamnse-aluno linhaPratica col-md-7 mt-4 mt-4"  v-show="anambseAlunoAtivar">
        <div class="praticaAtividade mt-3">
            <span class="labelTexto">Pratica alguma atividade física?</span>
            <label>
                <input type="radio" v-model="fezAtividade" value="sim" class="ms-2">
                Sim
            </label>
            <label>
                <input type="radio" v-model="fezAtividade" value="nao" class="ms-2">
                Não
            </label>
        </div>

        <div class="qntVezes mt-md-3">
            <span class="labelTexto">Quantes vezes na semana?</span>
            <label>
                <input type="radio" v-model="qntsVezes" value="1" class="ms-2">
                1x
            </label>
            <label>
                <input type="radio" v-model="qntsVezes" value="2" class="ms-2">
                2x
            </label>
            <label>
                <input type="radio" v-model="qntsVezes" value="3" class="ms-2">
                3x ou mais
            </label>
        </div>

        <div class="fumante mt-md-3">
            <span class="labelTexto">Fumante?</span>
            <label>
                <input type="radio" v-model="fumante" value="sim" class="ms-2">
                Sim
            </label>
            <label>
                <input type="radio" v-model="fumante" value="nao" class="ms-2">
                Não
            </label>
        </div>

        <div class="coluna mt-md-3">
            <span class="labelTexto">Problemas na coluna?</span>
            <label>
                <input type="radio" v-model="coluna" value="sim" class="ms-2">
                Sim
            </label>
            <label>
                <input type="radio" v-model="coluna" value="nao" class="ms-2">
                Não
            </label>
        </div>

    </div>

    <div class="aluno-de-menor">

    </div>
</div>
</template>

<style>

.nav-tabs .nav-item a{
    text-decoration: none;
    color: rgb(24, 24, 24);
}

.demo-app {
  /* display: flex; */
  /* min-height: 80%; */
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  max-height: 980px;
  
  justify-content: center;
}

.formulario{
    /* border-style: solid; */
    border-color: #e0e0e0;
    border-radius: 10px;
    border-width: 1px;
    padding: 2%;
}

.dados-Pessoais{

}

.dados-antropometricos{
}

.linhaPratica{

}

</style>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Formulario',
    data() {
        return{

            selectedOption: '' as string,
            minhaVariavel: '' as string,
            fezAtividade: "",
            qntsVezes: "",
            fumante: "",
            coluna:"",
            generoOutro: "",
            outroGenero: 'Outro...' as string,
            dadosPessoaisAtivar: true as boolean,
            dadosAntropometricosAtivar: false as boolean,
            anambseAlunoAtivar: false as boolean,
        }
    },
    methods:{

        updateVariable(): void {
            this.minhaVariavel = this.selectedOption;
        },

        onclickPessoais(){
            this.dadosPessoaisAtivar = true;
            this.dadosAntropometricosAtivar = false;
            this.anambseAlunoAtivar = false;
        },
        onclickAntropometrico(){
            this.dadosPessoaisAtivar = false;
            this.dadosAntropometricosAtivar = true;
            this.anambseAlunoAtivar = false;
        },
        onclickAluno(){
            this.dadosPessoaisAtivar = false;
            this.dadosAntropometricosAtivar = false;
            this.anambseAlunoAtivar = true;
        },

    }

});

</script>