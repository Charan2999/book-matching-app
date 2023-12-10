import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import HomeBefore from "../../assets/homebefore.svg";
import HomeAfter from "../../assets/homeafter.svg";
import "../Home/Home.css";
import "../Home/Table.css";

const Home = () => {
  const navigate = useNavigate();
  const [isTyping, setIsTyping] = useState(false);
  const [genre, setGenre] = useState("");
  const [sliderValue, setSliderValue] = useState(0);
  const [books, setBooks] = useState([]);
  const [feedback, setFeedback] = useState(
    "Try Searching for The Ninja the Scroll(s) you wanted"
  );
  const userName = localStorage.getItem("userName");

  const handleInputChange = (e) => {
    const isNotEmpty = e.target.value.length > 0;
    setIsTyping(isNotEmpty);
    const inputValue = e.target.value;
    setGenre(inputValue);
  };

  const handleSliderChange = (e) => {
    setSliderValue(Number(e.target.value));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:3000/api/books/search?rating=${sliderValue}&genre=${genre}`
      );
      setGenre("");
      setSliderValue(0);
      setBooks(response.data);
      setIsTyping(false);
      if (!response.data.length) {
        setFeedback("No Scroll found!. Try a different Summoning word.");
        alert("No Scroll found!. Try a different Summoning word.");
      } else if (response.data.length > 0) {
        setFeedback("Your Scroll(s) are Ready");
        alert("Your Scroll(s) are Ready");
      }
    } catch (error) {
      setIsTyping(false);
      alert(error.message);
      console.log("Error in getting the books", error);
    }
  };

  useEffect(() => {
    const userName = localStorage.getItem("userName");
    if (userName) {
      navigate("/home");
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-default-container">
          <form onSubmit={handleFormSubmit} className="search-form">
            <div className="form-inputs">
              <h1>
                <em>Konnichiwa!</em> {userName}
              </h1>
              <p>
                <b>Welcome to Book Match!</b>
              </p>
              <p>
                Discover your next literary adventure with Book Match – where
                The Perfect Scroll meet their Perfect Ninja. 📚✨
              </p>
              <div className="field-container">
                <h3>Search form</h3>
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search by Genre"
                  value={genre}
                  onChange={handleInputChange}
                  required
                />
                <input
                  className="search-slider"
                  type="range"
                  min="0"
                  max="5"
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
                <p className="slider-value">{sliderValue}🌟's rating</p>
                <button
                  className={`search-button ${isTyping ? "rotate" : ""}`}
                  type="submit"
                >
                  <div className="search-icon-wrapper">
                    <img
                      className="search-sharingan"
                      width="16"
                      alt="Search"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sharingan_triple.svg/32px-Sharingan_triple.svg.png"
                    />
                  </div>
                  Search by
                </button>
              </div>
            </div>
          </form>
          {books.length > 0 ? (
            <img
              className="home-img"
              src={HomeAfter}
              alt="looking for the books"
            />
          ) : (
            <img
              className="home-img"
              src={HomeBefore}
              alt="looking for the books"
            />
          )}
        </div>

        {books.length > 0 && (
          <div className="results-container">
            <table className="results-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Genres</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) => (
                  <tr key={index}>
                    <td>
                      <a
                        href={`https://www.google.com/search?q=${encodeURIComponent(
                          book.title
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {book.title}
                      </a>
                    </td>
                    <td>{book.author}</td>
                    <td>{book.genres.join(", ")}</td>
                    <td>{book.rating}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="feedback-container">
          <p>{feedback}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
