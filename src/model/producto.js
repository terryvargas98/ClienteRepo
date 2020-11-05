const { model, Schema } = require('mongoose');

const SchemaProducto = new Schema({
    producto_id: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    },
    Created: {
        type: Date,
        required: true
    },
})

module.exports = model('producto', SchemaProducto);