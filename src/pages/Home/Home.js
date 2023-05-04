import React from "react";
import Profile from "../../assets/profile.jpeg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="profile-img" />
      <div className="home-content">
        <div className="home-data">
          <h1 className="home-title">
            <span>I'm Sai Krishna.</span>
            <br />
            Developer at TCS
          </h1>
          <p className="home-description">
            APIM Developer in Microsoft Azure Platform with 1.5 years of
            industry experience working in Ecommerce Applications. Started My
            Journey as UI Developer.
          </p>
          <Link to="/about" className="button">
            More About Me{""}
            <span className="button-icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color-block"></div>
    </section>
  );
};

export default Home;
