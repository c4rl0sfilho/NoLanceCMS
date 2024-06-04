function pessoaFouJ(){
    let select = document.getElementById('pessoa')

    let divPJ = document.getElementById('PJ')
    let divPF = document.getElementById('PF')

    if (select.value == 'PF') {
                divPF.classList.remove('hidden');
                divPJ.classList.add('hidden');
            } else {
                divPJ.classList.remove('hidden');
                divPF.classList.add('hidden');
            }
}