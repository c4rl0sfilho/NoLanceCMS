'use strict';

import { getFuncionarios } from './endpoints.js';

const email = document.getElementById('email').value 
const password = document.getElementById('password').value
const btnLogin = document.getElementById('btnLogin')

btnLogin.addEventListener('click', async () => {
    const funcionarios = await getFuncionarios()

    const funcionario = funcionarios.map(funcionario => funcionario.email == email && funcionario.senha == password)
    console.log(funcionario);

    if (funcionario) {
        localStorage.setItem('funcionario', JSON.stringify(funcionario.id))
        window.location.href = '../html/home.html'
    } else {
        alert('Usuário ou senha inválidos')
    }

})
