let mongoose = require('mongoose');

// create a model class
let ProductModel = mongoose.Schema
    (
        {
            incident:
            {
                type: String,
                default: "",
                trim: true,
                required: 'name for survey is required'
            },
            description:
            {
                type: String,
                default: "",
                trim: true,
                required: 'description is required'
            },
            date:
            {
                type: Date
            }
        },
        {
            collection: "incident"

        }
    );
module.exports = mongoose.model('Byproduct', ProductModel);