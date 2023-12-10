// server.js
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

const booksData = require("./booksFile/books");
const corsOptions = {
  origin: ["http://localhost:5173", "https://bookmatchapp.netlify.app"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.static("public"));

app.get("/api/books/search", (req, res) => {
  const { genre, rating } = req.query;
  const results = booksData.filter(
    (book) =>
      book.rating >= parseInt(rating) &&
      book.genres.some((bookGenre) =>
        bookGenre.toLowerCase().includes(genre.toLowerCase())
      )
  );
  res.json(results);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
