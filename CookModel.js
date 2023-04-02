const mongoose = require('mongoose');
const cookSchema = new mongoose.Schema ({
    title: {
        type: String,
        // name: String,
        // category: String,
        // recipe: String,
        required: true
    }
})

const formSchema = {
    name: String,
    category: String,
    recipe: String
}
module.exports = mongoose.model('Recipes', formSchema);
