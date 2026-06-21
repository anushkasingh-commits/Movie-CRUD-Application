const Movie = require("../models/movie.js");

const movieController = {
    home: (req, res) => {
        res.render("home.ejs");
    },

    getMovie: async (req, res) => {
        const allMovies = await Movie.find();

        res.render("movies.ejs", {
            movies: allMovies
        });
    },

    addMovie: async (req, res) => {
        try {
            await Movie.create(req.body);
            res.redirect("/movies");
        } catch (err) {
            console.log(err);
            res.send(err.message);
        }
    },

    editMovie: async (req, res) => {
        await Movie.findByIdAndUpdate(
            req.params.id,
            req.body
        );
        res.redirect("/movies");
    },

    deleteMovie: async (req, res) => {
        await Movie.findByIdAndDelete(
            req.params.id
        );
        res.redirect("/movies");
    },

    searchMovie: async (req, res) => {
        const movie = await Movie.find({
            movieName : req.body.movieName
        });
        res.render("movies.ejs", {
            movies: movie
        });
    },

    showAddForm: (req, res) => {
        res.render("form.ejs");
    },

    showEditForm : async (req, res) => {
        const movie = await Movie.findById(req.params.id);

        res.render("edit.ejs", {
            movie : movie
        });
    }
}

module.exports = movieController;