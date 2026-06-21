const express = require("express");
const connectDB = require("./config/db.js");
const authHandler = require("./middleware/authHandler.js");
const errorHandler = require("./middleware/errorHandler.js");
const movieRoutes = require("./routes/movieRoutes.js");

const port = 4000;
const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.set("view engine", "ejs");

app.use(authHandler);
app.use(errorHandler);
app.use("/", movieRoutes);

app.listen(port, () => {
    console.log(`Server is running at ${port}`);
});