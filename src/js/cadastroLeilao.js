'use strict';

import { getCategorias, getLotes, getComitentes, getModalidades, deleteModalidades, getCategoriasById } from "./endpoints.js";

const btnCadastro = document.getElementById('btnCadastro');

const exibirCategorias = async () => {
    const categoriesSelect = document.getElementById('categorias')
    let categorias = await getCategorias()

    for (let i = 0; i < categorias.length; i++) {
        let categoria = categorias[i]

        let option = document.createElement('option')
        option.value = categoria.id
        option.textContent = categoria.nome

        categoriesSelect.appendChild(option)

    }
    categoriesSelect.addEventListener('change', () => {
        let selectedOption = categoriesSelect.options[categoriesSelect.selectedIndex];
        console.log(selectedOption.value);
    });
}

await exibirCategorias()

const exibirLotes = async (select) => {
    console.log(select);
    const lotesSelect = document.getElementById(`${select}`)
    let lotes = await getLotes()

    for (let i = 0; i < lotes.length; i++) {
        let lote = lotes[i]

        let option = document.createElement('option')
        option.value = lote.id
        option.textContent = lote.nome

        lotesSelect.appendChild(option)
    }
    lotesSelect.addEventListener('change', () => {
        let selectedOption = lotesSelect.options[lotesSelect.selectedIndex];
        console.log(selectedOption.value);
    });
}

await exibirLotes('lotes')

const exibirComitentes = async () => {
    const comitentesSelect = document.getElementById('comitentes')
    let comitentes = await getComitentes()

    for (let i = 0; i < comitentes.comitentes_fisicos.length; i++) {
        let comitenteFisico = comitentes.comitentes_fisicos[i]

        let option = document.createElement('option')
        option.value = comitenteFisico.id
        option.textContent = comitenteFisico.nome

        comitentesSelect.appendChild(option)
    }

    for (let i = 0; i < comitentes.comitentes_juridicos.length; i++) {
        let comitenteJuridico = comitentes.comitentes_juridicos[i]

        let option = document.createElement('option')
        option.value = comitenteJuridico.id
        option.textContent = comitenteJuridico.nome

        comitentesSelect.appendChild(option)
    }

    comitentesSelect.addEventListener('change', () => {
        let selectedOption = comitentesSelect.options[comitentesSelect.selectedIndex];
        console.log(selectedOption.value);
    });
}

await exibirComitentes()

const exibirModalidades = async () => {
    const modalidadesSelect = document.getElementById('modalidades')
    let modalidades = await getModalidades()
    console.log(modalidades);

    for (let i = 0; i < modalidades.length; i++) {
        let modalidade = modalidades[i]

        const div = document.createElement('div')
        div.classList.add('flex', 'flex-col', 'items-center')

        const h1 = document.createElement('h1')
        h1.textContent = modalidade.nome

        const checkbox = document.createElement('input')
        checkbox.type = 'checkbox'
        checkbox.id = modalidade.id

        div.append(h1, checkbox)
        modalidadesSelect.appendChild(div)

        checkbox.addEventListener('change', () => {
            if (checkbox.checked == true) {
                console.log(checkbox.id);
            } else { }
        })
    }
}

await exibirModalidades()

const foto_fundo = document.getElementById("bg-dropzone-file")
foto_fundo.addEventListener("change", async () => {
    let fileImgBackground
    fileImgBackground = foto_fundo.files[0]

    let foto
    let file = foto_fundo.files[0]

    if (file) {
        const reader = new FileReader()

        reader.addEventListener("load", (e) => {
            const render = e.target
            const img = document.getElementById("foto-bg")
            foto = render.result
            img.src = foto
        })
        reader.readAsDataURL(file)
    }
})

const btnMaisLote = document.getElementById('btnMaisLote')
let id = 1
btnMaisLote.addEventListener('click', async () => {
    const lotesSelect = document.createElement('select');
    id += 1;
    lotesSelect.name = 'lotes';
    lotesSelect.id = `lotes${id}`;

    const option = document.createElement('option')
    option.value = ''
    lotesSelect.appendChild(option)

    const lotesContainer = document.getElementById('adicionarLotes');
    lotesContainer.appendChild(lotesSelect);

    await exibirLotes(`${lotesSelect.id}`)
    
})

const formatDate = (data) => {
    let formattedDate = moment(data).format("YYYY-MM-DD HH:mm:ss");

    return formattedDate
}

btnCadastro.addEventListener('click', async () => {
    const dataInicio = document.getElementById('data_inicial').value
    const dataFim = document.getElementById('data_final').value
    const nome = document.getElementById('nome').value
    let categoriaSelecionada = comitentesSelect.options[comitentesSelect.selectedIndex];
    const categoria = await getCategoriasById(categoriaSelecionada.value)

})

