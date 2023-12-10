import React from "react";
import NotFoundSVg from "../../assets/404.svg";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h2>
        This part of{" "}
        <strong
          style={{
            color: "green",
          }}
        >
          Konoha
        </strong>{" "}
        is not reachable or not present
      </h2>
      <img
        style={{
          marginTop: "20px",
        }}
        src={NotFoundSVg}
        alt="This part of Konoha is not reachable or not present"
      />
      <p>
        Head back to...
        <button
          style={{
            marginTop: "20px",
            width: "50px",
            height: "25px",
            font: "22px",
            border: "1px solid #ac2436",
          }}
        >
          <Link to="/home" className="nav-link">
            Home
          </Link>
        </button>
      </p>
    </div>
  );
};

export default PageNotFound;
