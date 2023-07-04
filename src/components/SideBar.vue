<template>
  <!-- SIDE MENU -->
  <nav class="side-menu">

    <a href="#" class="ham" data-bs-toggle="offcanvas" data-bs-target="#ham-menu" aria-controls="ham-menu"><i
        class="bi bi-list"></i></a>
      
    <ul class="menu-contain">
      <li class="menu-opc text-center w-100 ms-0">
        <a class="menu-button" href="/dashboard">
          <i class="bi bi-house-door-fill fs-5"></i>
          <span class="fw-semibold">HOME</span>
        </a>
      </li>

      <li class="menu-opc text-center w-100 ms-0">
        <a class="menu-button" id="config-button-desk" href="/entradasaida">
          <i class="bi bi-alarm-fill"></i>
          <span class="fw-semibold">ENTRADA&SAIDA</span>
        </a>
      </li>
      <li class="menu-opc text-center w-100 ms-0">
        <a class="menu-button" href="/usuario">
          <i class="bi bi-person-fill fs-5"></i>
          <span class="fw-semibold">ALUNOS</span>
        </a>
      </li>
      <li class="menu-opc text-center w-100 ms-0">
        <a class="menu-button" href="/treino">
          <i class="bi bi-scooter fs-5"></i>

          <span class="fw-semibold">TREINOS</span>
        </a>
      </li>
      <li class="menu-opc text-center w-100 ms-0">
        <a class="menu-button" href="/treinoexercicio">
          <i class="bi bi-clipboard-fill fs-5"></i>

          <span class="fw-semibold">TREINO-EXER</span>
        </a>
      </li>
      <li class="menu-opc text-center w-100 ms-0">
        <a class="menu-button" href="/exercicio">
          <i class="bi bi-clipboard-fill fs-5"></i>
          <span class="fw-semibold">EXERCICIOS</span>
        </a>
      </li>
      <li class="menu-opc text-center w-100 ms-0">
        <a class="menu-button" href="/grupo-muscular">
          <i class="bi bi-clipboard-fill fs-5"></i>
          <span class="fw-semibold">GRUPO MUSCULAR</span>
        </a>
      </li>
      <li class="menu-opc text-center w-100 ms-0">
        <button class="menu-button botaoConfig" id="config-button-desk" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
          <i class="bi bi-gear-fill fs-5"></i>
          <span class="fw-semibold">CONFIGURAÇÕES</span>
        </button>
      </li>
    </ul>

    <div class="offcanvas offcanvas-top" tabindex="-1" id="ham-menu" aria-labelledby="ham-menu">
      <div class="offcanvas-body">
        <li>
          <a href="/dashboard">
            <i class="bi bi-house-door-fill fs-5 me-2"></i>
            <span>HOME</span>
          </a>
        </li>
        <li>
          <a href="/entradasaida">
            <i class="bi bi-person-fill fs-5 me-2"></i>
            <span>ENTRADA&SAIDA</span>
          </a>
        </li>
        <li>
          <a href="/usuario">
            <i class="bi bi-person-fill fs-5 me-2"></i>
            <span>ALUNOS</span>
          </a>
        </li>
        <li>
          <a href="/treino">
            <i class="bi bi-scooter fs-5 me-2"></i>

            <span>TREINOS</span>
          </a>
        </li>
        <li>
          <a href="/treinoexercicio">
            <i class="bi bi-clipboard-fill fs-5 me-2"></i>

            <span>TREINO EXERCÍCIOS</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-clipboard-fill fs-5 me-2"></i>
            <span>EXERCÍCIOS</span>
          </a>
        </li>
        <li>
          <a href="">
            <i class="bi bi-gear-fill fs-5 me-2"></i>
            <span>CONFIGURAÇÕES</span>
          </a>
        </li>
      </div>
    </div>
  </nav>
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">CONFIGURAÇÕES</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <span class="textoConfig ">Horario de Entrada dos Funcionarios:</span> 07:30h
          <br><br>
          <span class="textoConfig">Horario de Entrada dos Clientes:</span> 08:30h
          <br><br>
          <span class="textoConfig">Ocupação MAXIMA:</span> 13 por hora
          <br><br>
          <span class="textoConfig"> Ocupação Previsivel:</span> <br>
          <span class="config"> Segunda: 10 por hora</span> <br>
          <span class="config"> Terça: 9 por hora</span> <br>
          <span class="config"> Quarta: 11 por hora</span> <br>
          <span class="config"> Quinta: 12 por hora</span> <br>
          <span class="config"> Sexta: 9 por hora</span> <br>

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
/* MENU */

.side-menu {
  z-index: 1;
  position: fixed;
  background-color: #004777;
  transition: width 600ms ease;
}

.menu-contain {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.config {
  margin-left: 5%;
}

.textoConfig {
  font-weight: 600;
}

.botaoConfig {
  border: none;
  background-color: transparent;
  color: inherit;
  text-decoration: none;
}

.menu-opc:first-child {
  margin-bottom: auto;
}

.menu-opc:last-child {
  margin-top: auto;
}

.menu-button {
  display: flex;
  align-items: center;
  height: 5rem;
  color: #b2c7d6;
  text-decoration: none;
  transition: 600ms;
}

.menu-button:hover {
  background-color: #061d2c;
}

.menu-button span {
  display: none;
}

.menu-button i {
  width: 2rem;
  min-width: 2rem;
  margin: 0 1.5rem;
}

.offcanvas {
  background-color: #004777;
}

.offcanvas li {
  list-style-type: none;
  display: flex;
  justify-content: center;
}

.offcanvas li a {
  color: white !important;
  text-decoration: none;
}

@media only screen and (max-width: 700px) {
  .side-menu {
    width: 100vw;
    height: 3.5rem;
    top: 0;
    overflow-x: auto;
    display: flex;
    justify-content: flex-end;
    padding: 15px;
  }

  .ham {
    color: white;
    font-size: 28px;
  }

  .menu-contain {
    display: none;
  }

  .menu-button {
    justify-content: center;
  }

  .menu-button span {
    display: none;
  }

  .menu-opc:last-child {
    display: none;
  }

  .option a {
    justify-content: flex-end;
    font-size: 12px;
  }

  .config {
    width: 75%;
    right: -75%;
  }

  .background-config {
    width: 25%;
    height: 100%;
    top: 0;
    left: 0;
    position: fixed;
    display: none;
  }

}

@media only screen and (min-width: 700px) {
  .side-menu {
    top: 0;
    width: 5rem;
    height: 100vh;
  }

  .ham {
    display: none;
  }

  #ham-menu {
    display: none;
  }

  .ham-menu {
    display: none;
  }

  .side-menu:hover {
    width: 16rem;
  }

  .side-menu:hover span {
    display: block;
    animation: fadeIn 1500ms;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SideBar',
  // props: {
  //   msg: String,
  // },
});
</script>