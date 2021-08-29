const mongoose = require('mongoose');

const candidatoSchema = new mongoose.Schema( {
    nome: { type: String, unique: false, required: true},
    cargoPretendido: { type: String, unique: false, required: false},
    dataDeNascimento: { type: String, unique: false, required: true},
    sexo: { type: String, unique: false, required: false},
    estadoCivil: { type: String, unique: false, required: false},
    rua: { type: String, unique: false, required: true},
    numero: { type: String, unique: false, required: true},
    bairro: { type: String, unique: false, required: true},
    complemento: { type: String, unique: false, required: true},
    cep: { type: String, unique: false, required: false},
    cidade: { type: String, unique: false, required: true},
    estado: { type: String, unique: false, required: true},
    pais: { type: String, unique: false, required: true},
    email: { type: String, unique: true, required: false},
    telefone: { type: String, unique: false, required: false},
    celular: { type: String, unique: false, required: false},
    identidade: { type: String, unique: true, required: true},
    cpf: { type: String, unique: true, required: true},
    veiculo: { type: String, unique: false, required: false},
    habilitacao: { type: String, unique: false, required: false}

}, {
    timestamps: true
});

module.exports = mongoose.model('candidato' , candidatoSchema);