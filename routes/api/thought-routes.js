// req express router
const router = require('express').Router();

//set requirements 
const { 
    getAllThoughts, 
    getThoughtsById, 
    createThoughts, 
    updateThoughts,
    deleteThoughts,
    addReaction,
    deleteReaction

} = require('../../controllers/thoughts-controller');
//get
router.route('/').get(getAllThoughts);
//get, put,delete
router.route('/:id').get(getThoughtsById).put(updateThoughts).delete(deleteThoughts); 
//post by id
router.route('/:userId').post(createThoughts);
//post by reaction
router.route('/:thoughtId/reactions').post(addReaction);
//delete reaction
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;
