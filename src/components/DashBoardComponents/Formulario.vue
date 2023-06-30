<template>

<div class="demo-app">
    <div class="dados-Pessoais col-md-8">
        <div class="nome col-md-10">
            <label for=""></label>
            <input type="text" class="col-md-10" placeholder="Nome completo">
        </div>
        <div class="genero">
            <label for=""></label>
            <select class="form-select" v-model="selectedOption" @change="updateVariable">
                <option selected>Selecione...</option>
                <option value="1">Masculino</option>
                <option value="2">Feminino</option>
                <option value="3">Outro</option>
            </select>
            <input type="text" v-if="minhaVariavel === '3'">
        </div>
        
        <div class="idade">
            <label for="idadeInput">Idade</label>
            <input type="number" id="idadeInput" v-model="idadeOption" @change="abreMenorIdade">
        </div>
        <div class="dataNascimento">
            <label for="nascimentoInput">Data de Nascimento</label>
            <input type="date" id="nascimentoInput">
        </div>
        <div class="endereco">
            <label for=""></label>
            <input type="text" placeholder="Endereço">
        </div>
        <div class="telefone">
            <label for=""></label>
            <input type="text" placeholder="(045)123456789">
        </div>
        <div class="cpf">
            <label for=""></label>
            <input type="text" placeholder="123.456.789-01">
        </div>
        <div class="estadoCivil">
            <label for=""></label>
            <select class="form-select">
                <option selected>Selecione...</option>
                <option value="1">Solteiro(a)</option>
                <option value="2">Casado(a)</option>
                <option value="3">Seperado(a)</option>
                <option value="4">Divorciado(a)</option>
                <option value="5">Viuvo(a)</option>
            </select>
        </div>
        
    </div>

    <div class="aluno-de-menor">

    </div>

    <div class="anamnse-aluno">
        <div class="praticaAtividade">
            <span>Pratica alguma atividade física?</span>
            <label>
                <input type="radio" v-model="fezAtividade" value="sim">
                Sim
            </label>
            <label>
                <input type="radio" v-model="fezAtividade" value="nao">
                Não
            </label>
        </div>

        <div class="qntVezes">
            <span>Quantes vezes na semana?</span>
            <label>
                <input type="radio" v-model="qntsVezes" value="1">
                1x
            </label>
            <label>
                <input type="radio" v-model="qntsVezes" value="2">
                2x
            </label>
            <label>
                <input type="radio" v-model="qntsVezes" value="3">
                3x ou mais
            </label>
        </div>

        <div class="fumante">
            <span>Fumante?</span>
            <label>
                <input type="radio" v-model="fumante" value="sim">
                Sim
            </label>
            <label>
                <input type="radio" v-model="fumante" value="nao">
                Não
            </label>
        </div>

        <div class="coluna">
            <span>Problemas na coluna?</span>
            <label>
                <input type="radio" v-model="coluna" value="sim">
                Sim
            </label>
            <label>
                <input type="radio" v-model="coluna" value="nao">
                Não
            </label>
        </div>

    </div>
    <div class="dados-antropometricos">
        <div class="peso">
            <label for=""></label>
            <input type="number" placeholder="Peso Kg">
        </div>
        <div class="altura">
            <label for=""></label>
            <input type="number" placeholder="altura M">
        </div>
        <div class="imc">
            <label for=""></label>
            <input type="number" placeholder="Indice de massa corporal(IMC)">
        </div>
        <div class="masaMagra">
            <label for=""></label>
            <input type="number" placeholder="Masa magra %">
        </div>
        <div class="masaGorda">
            <label for=""></label>
            <input type="number" placeholder="Masa Gorda %">
        </div>
        <div class="massaMuscular">
            <label for=""></label>
            <input type="number" placeholder="Massa Muscular %">
        </div>
        <div class="percentual">
            <label for=""></label>
            <input type="number" placeholder="Percentual de gordura %">
        </div>
        <div class="circuQuadril">
            <label for=""></label>
            <input type="number" placeholder="Circunferencia do Quadril cm">
        </div>
        <div class="circuCintura">
            <label for=""></label>
            <input type="number" placeholder="Circunferencia da Cintura cm">
        </div>
        <div class="cinturaQuadril">
            <label for=""></label>
            <input type="number" placeholder="Relação Cintura-Quadril">
        </div>
        

    </div>

</div>


</template>

<style>

.demo-app {
  /* display: flex; */
  /* min-height: 80%; */
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  max-height: 980px;
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
            
        }
    },
    methods:{

        updateVariable(): void {
            console.log(this.selectedOption); 
            this.minhaVariavel = this.selectedOption;
            console.log(this.minhaVariavel);
            console.log(typeof(this.minhaVariavel));  
        }
    }

});

</script>