const { Router } = require('express');
const { getRecipe, deleteRecipe, editRecipe } = require('./CookController');

const router = Router();


router.get('/', getRecipe);
router.delete('/deleteRecipe', deleteRecipe);
router.post('/editResipe', editRecipe);

module.exports = router;