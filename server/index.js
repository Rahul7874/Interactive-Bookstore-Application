const express = require("express")
const cors = require("cors")
const app = express();
const PORT = 8000;
const { connection } = require("./Config/db.js")
const { BooksController } = require("./Routes/Book.route.js")



app.use(cors());
app.use(express.json())

app.use("/book", BooksController)

app.listen(PORT, async () => {
    try {
        await connection;
        console.log("Connected to Mongo Atlas")
    }
    catch (err) {
        console.log("Error while connecting to db")
        console.log(err)
    }
    console.log(`listening on PORT ${PORT}`)
})