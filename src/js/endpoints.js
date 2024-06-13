'use strict';

const baseUrl = "http://nolance.azurewebsites.net/v1/nolance"

//////////////////////////////LOTES//////////////////////////////////
export async function getLotes() {
    const url = `${baseUrl}/lotes`
    const response = await fetch(url)
    const data = await response.json()
    return data.lotes
}

///////////////////////////////LEILÃO///////////////////////////////////
export async function getLeilao() {
    const url = `${baseUrl}/leiloes`
    const response = await fetch(url)
    const data = await response.json()
    return data.leiloes
}
export async function getLeilaoID(id) {
    const url = `${baseUrl}/leilao/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

//////////////////////////////FUCIONÁRIOS//////////////////////////////////
export async function getFuncionarios()  {
    const url = `${baseUrl}/employees`
    const response = await fetch(url)
    const data = await response.json()

    return data.funcionarios
}


//////////////////////////////CATEGORIAS///////////////////////////////////

export async function getCategorias() {
    const url = `${baseUrl}/categorias`
    const response = await fetch(url)
    const data = await response.json()
    return data.categorias
}

export async function getCategoriasById(id) {
    const url = `${baseUrl}/categoria/${id}`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

//////////////////////////COMITENTE////////////////////////////////
export async function getComitentes() {
    const url = `${baseUrl}/comitentes`
    const response = await fetch(url)
    const data = await response.json()
    return data
}

///////////////////////////MODALIDADES////////////////////////////////

export async function getModalidades() {
    const url = `${baseUrl}/modalidade`
    const response = await fetch(url)
    const data = await response.json()
    return data.modalidades
}

export async function deleteModalidades(id) {
    const url = `${baseUrl}/modalidade/${id}`
    const options = {
        method: "DELETE"
    }
    const response = await fetch(url,options)

    return response.ok
}
