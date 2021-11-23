const mongoose =require('mongoose');

let ofertaLaboralSchema = new mongoose.Schema({
    tipoDocuOL: String,
    documentoIdOL: Number,
    nombresOL: String,
    apellidosOL: String,
    direccionOL: String,
    correoElectronicoOL: String,
    telefonoFijoOL: String,
    telefonoCelularOL: String,
    enlaceSitioWebOL: String,
    descripcionPerfilOL: String
});

module.exports = mongoose.model('ofertaLaboral',ofertaLaboralSchema, 'OfertaLaboral');
