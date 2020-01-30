const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let reviewSchema = new Schema ({
    stars : {type : Number, min : 1, max : 5, required : true},
    content : {type : String, min : 20, required : true},
    title : {type: String, required : false},
    screenName : {type : String, required : false},
    wouldReccomend : {type : Boolean}
})

const Reviews = mongoose.model('Reviews', reviewSchema);

module.exports = Reviews;
