const {get} = require('mongoose');
const RecipesModel = require('./CookModel');

module.exports.getRecipe = async(req, res) =>{
    const myRecipe = await RecipesModel.find();
    res.send(myResipe)
}
// module.exports.saveCooking = async(req, res) =>{
//     const { title } =req.body;
//     CookModel.create ({ title })
//     .then((data) => { 
//         console.log('Recipe added')
//         res.send(data);
//     })
// }

module.exports.deleteRecipe= async(req, res) => {
    RecipesModel.findByIdAndDelete(_id)
    .then(() => res.send("Deleted a recipe"))
    }

//     // EDIT
module.exports.editRecipe = async(req, res) => {
    const { _id, name } = req.body;
    RecipesModel.findByIdAndUpdate(_id, name)
    .then(() => res.send("Updated a recipe"))
    }

