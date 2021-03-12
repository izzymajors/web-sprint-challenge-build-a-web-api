// Write your "projects" router here!
const express = require('express');
const { checkId, validateAction } = require('../actions/actions-middleware');



const Projects = require('./projects-model')


const router = express.Router();

router.get("/", (req, res, next) => {
    Projects.find(req.query) 
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(next);
})

router.get('/projects/:id',checkId,(req, res) => {
    res.json(req.projects);
});

router.post('/', validateAction, (req, res, next) => {
    Projects.add(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(next);
});

router.put('/projects/:id', checkId, (req, res, next) => {
    Projects.update(req.params.id, req.body)
    .then(project => {
        res.status(200).json(project);
    })
    .catch(next);
})

router.delete("/projects/:id", checkId, (req,res,next) => {
    Projects.remove(req.params.id)
    .then(() => {
        res.status(200).json({ message: 'The project was nuked'})
    })
    .catch(next);
})


