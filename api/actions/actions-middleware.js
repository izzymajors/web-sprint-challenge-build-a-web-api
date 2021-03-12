const Actions = require('./actions-model');

const checkId = async (req, res, next) => {

    console.log('check id working')
    try{
        const action = await Actions.findById(req.params.id);
        if (!action) {
            res.status(404).json({
                message: `action with id ${req.params.id} does not exist`
            });
        } else {
            req.action = action
            next();
        }
    } catch (err) {
        next(err);
    }
};

const validateAction = (req, res, next) => {
    if (!req.body.name || req.body.name.trim()) {
        res.status(422).json({
            message: 'name is required'
        })
    } else {
        next();
    }
}


module.exports = {
    checkId,
    validateAction
}