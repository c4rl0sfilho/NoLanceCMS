async function getLotes() {
    const url = 'http://localhost:8080/v1/nolance/lotes'
    const response = await fetch(url)
    const data = await response.json()
    return data.lotes
}
async function getLeilao() {
    const url = 'http://localhost:8080/v1/nolance/leiloes'
    const response = await fetch(url)
    const data = await response.json()
    return data.leiloes
}

//Função que formata a data
function formatDate(isoString) {
    const date = new Date(isoString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Mês em JavaScript é 0-indexado
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
}


async function criarLinhaLotes(){
    const leiloes = await getLeilao()
    const tbl_leiloes = document.getElementById('tbl_leiloes')
    
    console.log(leiloes);
    
    leiloes.forEach(leilao => {
        
        const tableRow = document.createElement('tr')

        const checkBox = document.createElement('input')
        checkBox.classList.add('px-8')
        checkBox.type = 'checkbox';
        checkBox.classList.add('border-2', 'border-[#56AB5A]');

        const nome = document.createElement('td')
        nome.classList.add('px-8')
        nome.textContent = leilao.nome

        const categoria = document.createElement('td')
        categoria.classList.add('px-8')
        categoria.textContent = leiloes[0].categoria[0].nome;


        const inicio = document.createElement('td');
        inicio.classList.add('px-8');
        inicio.textContent = formatDate(leilao.data_inicio);

        const encerramento = document.createElement('td');
        encerramento.classList.add('px-8');
        encerramento.textContent = formatDate(leilao.data_final);

        const modalidade = document.createElement('td')
        modalidade.classList.add('px-8')
        modalidade.textContent = leiloes[0].modalidade[0].nome;

        const acoes = document.createElement('td')
        acoes.classList.add('flex', 'pr-4' ,'gap-4')

        const editar = document.createElement('img')
        editar.src = '../img/edit_icon.svg'

        const lixeira = document.createElement('img')
        lixeira.src = '../img/trash_icon.svg'
        lixeira.classList.add('cursor-pointer')

        acoes.append(editar, lixeira)


        tableRow.append(checkBox, nome, categoria, inicio, encerramento, modalidade, acoes)
        tbl_leiloes.appendChild(tableRow)
    });



}

criarLinhaLotes()