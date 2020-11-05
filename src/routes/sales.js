const { Router } = require("express");

const router = Router();
const kafka = require('kafka-node');
const { json } = require("body-parser");
var kafkaClient = new kafka.KafkaClient({ kafkaHost: '23.99.182.90:9092' });
var consumer = new kafka.Consumer(kafkaClient, [{ topic: 'test' }]);
var producer = new kafka.Producer(kafkaClient);


router.get('/VerProductos', async(req, res) => {
    try {


        consumer.on('message', (message) => {
            console.log(message.value);
            var productos = JSON.parse(message.value);
            res.render('productos', { producto: productos });
        })
    } catch (erro) {
        res.json(erro);
    }

});

router.get('/RegistrarVenta', async(req, res) => {


    res.render('venta');


});
router.post('/RegistrarVenta', async(req, res) => {

    var venta = {
        cliente: req.body.cliente,
        producto: req.body.producto,
        total: req.body.total,
        vendedor: req.body.vendedor
    }
    producer.on('ready', () => {
        console.log('producer is ready')
    });
    payload = [{
        topic: 'test',
        messages: JSON.stringify(venta)
    }]
    producer.send(payload, (error) => {
        console.log(payload);
    })
    res.render('venta');


});



module.exports = router;