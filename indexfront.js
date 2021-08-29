'use strict';

const limparFormulario = (endereco) => {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('estado').value = "";
}

const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}

const cepValido = (cep) => cep.length === 8 && /^[0-9]+$/.test(cep);

const pesquisarCep = async() => {
    limparFormulario();

    const cep = document.getElementById('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('erro')){
            document.getElementById('rua').value = "CEP não encontrado!";
        } else{
            preencherFormulario(endereco);
        }
    }else{
        document.getElementById('rua').value = "CEP incorreto!";
    }
}

document.getElementById('cep').addEventListener('focusout', pesquisarCep);

// function mascara(i){
   
//     var v = i.value;
    
//     if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
//        i.value = v.substring(0, v.length-1);
//        return;
//     }
    
//     i.setAttribute("maxlength", "14");
//     if (v.length == 3 || v.length == 7) i.value += ".";
//     if (v.length == 11) i.value += "-";
 
// }

// function mascara2(i){
   
//     var v = i.value;
    
//     if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
//        i.value = v.substring(0, v.length-1);
//        return;
//     }
    
//     i.setAttribute("maxlength", "12");
//     if (v.length == 2 || v.length == 6) i.value += ".";
//     if (v.length == 10) i.value += "-";
 
// }

const Formulario = () => {
    let form = {
        nome: document.getElementById('nomeCompleto').value,
        cargo: document.getElementById('cargo').value,
        dataDeNascimento: document.getElementById('dataNascimento').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        sexo: document.getElementById('sexo').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        numero: document.getElementById('numero').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        pais: document.getElementById('pais').value,
        complemento: document.getElementById('complemento').value,
        telefone: document.getElementById('telefone').value,
        celular: document.getElementById('celular').value,
        email: document.getElementById('email').value,
        identidade: document.getElementById('identidade').value,
        cpf: document.getElementById('cpf').value,
        veiculo: document.getElementById('veiculo').value,
        hbilitacao: document.getElementById('habilitacao').value,
    };
    console.log(form);
    return form
}

const criarCandidato = async (candidato) => {
    const usuario = fetch('https://pedantic-meitner-f3dac6.netlify.app/', {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Formulario())

    });

    if (usuario.status === 200) {
        alert('Cadastro realizado com sucesso!')
    }
    
    if (usuario.status === 500) {
        alert('Dados já cadastrados!')
    }
    
}

function check_form() {

    var valid = true;
    if (!validacaoCPF() || !buscaCEP()) { valid = false; }

    if (!valid) {
        alert('Por favor, preencha todos os campos corretamente.');
        return false;
    } else {
        return true;
    }
}