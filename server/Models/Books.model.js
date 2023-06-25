const mongoose = require("mongoose")

const BookSchema = mongoose.Schema({

    title: { type: String, required: true },
    cover_image: { type: String, required: true },
    pages: { type: Number, required: true },
    releaseDate: { type: String, required: true },
    des:{ type: String, required: true },
    price:{type:Number},

})

const BookModel = mongoose.model("book", BookSchema)

module.exports = {
    BookModel
}