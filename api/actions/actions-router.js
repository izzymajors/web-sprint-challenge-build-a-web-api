// Write your "actions" router here!
const express = require('express');
const { checkId, validateAction } = require('./actions-middleware');
const Actions = require('./actions-model');


const router = express.Router();

router.get('/',(req, res, next) =>{
    Actions.find(req.query)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(next);
})

router.get('/:id', checkId, (req, res) => {
    res.json(req.action);
})


router.post('/', validateAction, (req, res, next) => {
    Actions.add(req.body)
    .then(action => {
        res.status(201).json(action);
    })
    .catch(next);
});

router.put('/:id', checkId, (req, res, next) => {
    Actions.update(req.params.id, req.body)
    .then(action => {
        res.status(200).json(action);
    })
    .catch(next);
});

router.delete('/:id', checkId, (req, res, next) => {
    Actions.remove(req.params.id)
    .then(() => {
        res.status(200).json({message: 'action was nuked'})
    })
    .catch(next);
})