//console.log("Hola mundo")
const express = require('express');
const mongoose = require('mongoose');
const ofertaLaboralSchema = require("./modelos/OfertaLaboral.js");

const app = express();
const router =express.Router();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//Conexion base de datos
mongoose.connect("mongodb+srv://dari:dari@cluster0.3etlz.mongodb.net/ActividadesBD?retryWrites=true&w=majority");
//Operaciones CRUD
router.get('/', (req, res) => {
    res.send("El inicio de mi API");
})

router.get('/ofertaLaboral', (req, res) => {
    ofertaLaboralSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo las tareas");
        }else{
            res.send(datos);
        }
    })
});

router.post('/ofertaLaboral', (req, res) => {
    let nuevaOfertaLabo = new ofertaLaboralSchema({
        tipoDocuOL: req.body.tipoDocu,
        documentoIdOL: req.body.id,
        nombresOL: req.body.nombre,
        apellidosOL: req.body.apellido,
        direccionOL: req.body.direccion,
        correoElectronicoOL: req.body.correo,
        telefonoFijoOL: req.body.telefonoFijo,
        telefonoCelularOL: req.body.telefonoCelu,
        enlaceSitioWebOL: req.body.enlaceWeb,
        descripcionPerfilOL: req.body.descripcion
    });

    nuevaOfertaLabo.save(function(err, datos){
        if(err){
           console.log(err);
        }
        res.send("Tarea almacenada corecctamente.")
    })
});

app.use(router);
app.listen(3000, () => {
    console.log("Sevidor corriendo en el puerto 3000")
});