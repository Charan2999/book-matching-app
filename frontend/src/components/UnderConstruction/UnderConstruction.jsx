import React from "react";
import UnderConstructionSVG from "../../assets/underconstruction.svg";
import Navbar from "../Navbar/Navbar";

const UnderConstruction = () => {
  return (
    <>
      <Navbar />
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
          is under development
        </h2>
        <img
          style={{
            width: "600px",
            marginTop: "20px",
          }}
          src={UnderConstructionSVG}
          alt="This part of Konoha is under development"
        />
      </div>
    </>
  );
};

export default UnderConstruction;
