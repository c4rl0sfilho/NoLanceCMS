function pessoaFouJ(){
    let select = document.getElementById('pessoa')

    let divPJ = document.getElementById('PJ')
    let divPF = document.getElementById('PF')

    if (select.value == 'PF') {
                divPF.classList.remove('hidden');
                divPJ.classList.add('hidden');
            } else if(select.value == 'PJ') {
                divPJ.classList.remove('hidden');
                divPF.classList.add('hidden');
            }  else if(select.value == 'null'){
                divPJ.classList.add('hidden');
                divPF.classList.add('hidden');
            }
}