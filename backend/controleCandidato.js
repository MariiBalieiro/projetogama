const candidato = require('../backend/candidato');

module.exports = {
    async register(req, res){
        const { nome, cargoPretendido, dataDeNascimento, sexo, estadoCivil, rua, numero, bairro, complemento, cep, cidade, estado, pais, email, telefone, celular, identidade, cpf, veiculo, habilitacao } = req.body;

        const newcandidato = new candidato();

        newcandidato.nome = nome;
        newcandidato.cargoPretendido = cargoPretendido;
        newcandidato.dataDeNascimento = dataDeNascimento;
        newcandidato.sexo = sexo;
        newcandidato.estadoCivil = estadoCivil;
        newcandidato.rua = rua;
        newcandidato.numero = numero;
        newcandidato.bairro = numero;
        newcandidato.complemento = complemento;
        newcandidato.cep = cep;
        newcandidato.cidade = cidade;
        newcandidato.estado = estado;
        newcandidato.pais = pais;
        newcandidato.email = email;
        newcandidato.telefone = telefone;
        newcandidato.celular = celular;
        newcandidato.identidade = identidade;
        newcandidato.cpf = cpf;
        newcandidato.veiculo = veiculo;
        newcandidato.habilitacao = habilitacao;

        newcandidato.save((err, savedcandidato) => {
            if (err) {
                console.log(err);
                return res.status(500).send("Erro ao cadastrar");
            }

            return res.status(200).send(savedcandidato);
        });
    },
};