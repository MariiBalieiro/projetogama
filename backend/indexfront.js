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
    const usuario = fetch('http://formulariojobsnet.herokuapp.com/', {
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

    let nome = document.getElementById('nomeCompleto').value;
    let cargo = document.getElementById('cargo').value;
    let dataDeNascimento = document.getElementById('dataNascimento').value;
    let cep = document.getElementById('cep').value;
    let rua = document.getElementById('rua').value;
    let numero = document.getElementById('numero').value;
    let bairro = document.getElementById('bairro').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let celular = document.getElementById('celular').value;
    let email = document.getElementById('email').value;
    let identidade = document.getElementById('identidade').value;

    if (nome == "" || cargo == "" || dataDeNascimento == "" || cep == "" || rua == ""
        || numero == "" || bairro == "" || cidade == "" || estado == "" || celular == "" ||
        email.length < 4 || identidade == "" || validacaoCPF() == false) {
        alert('Por favor, preencha todos os campos corretamente.');
    } else {
        criarCandidato();
    }
}