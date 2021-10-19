const { Router } = require('express')

const { BadRequestError } = require('../utils/errors')

const router = Router()
const { clientService } = require('../controller')

router.get('/', (req, res) => {
    clientService.getAll().then((value) => {
        console.log(value)
        res.json(value)
    })

    //res.json(clientService.getAll())
    //console.log(clientService.getAll())
})

router.get('/getAll', (req, res) => {
    //res.json(clientService.getAll())
    res.send({
        message: 'hello'
    })
})

router.get('/:id/engagements', (req, res) => {
    const id = req.params.id;
    res.json(clientService.getEngagements(id))

})

router.get('/:id', (req, res) => {
    const id = req.params.id
    res.json(clientService.getOne(id))
})

router.post('/', (req, res) => {
    const name = req.body.name

    if (!name) {
        res.status(400).json(new BadRequestError())
        return;
    }
    clientService.create(name).then((value) => {
        console.log(value)
        res.json(value)
    })


})

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const updates = req.body
    clientService.update(id, updates.name).then((value) => {
        res.json(value)
    })

})

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    res.json(clientService.delete(id))
        //res.json(clientService.delete(id))


})

module.exports = (app) => {
    app.use('/clients', router)
}