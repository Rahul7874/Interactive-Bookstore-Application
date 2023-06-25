const { Router } = require("express")
const { BookModel } = require("../Models/Books.model.js")
require("dotenv").config()



const BooksController = Router();

BooksController.get("/allbook", async (req, res) => {
    const Book = await BookModel.find();
    try {
        res.status(200).send({
            Book: Book,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

BooksController.post("/add", async (req, res) => {
    try {
        const { title, cover_image, pages, releaseDate, des, price, } = req.body;

        const Book = new BookModel({
            title,
            cover_image,
            pages,
            releaseDate,
            des,
            price,
        });

        await Book.save();

        res.status(201).json({ message: 'Book Added' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});




module.exports = {
    BooksController
}