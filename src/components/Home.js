import React from "react";
//import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "../styles/components/home.css";

const Home = () => (
  <>
    <div id="home">
      <section>
        <div style={{ textAlign: "center" }}>
          <span className="mdi mdi-cube-outline cube"></span>
        </div>
        <h1>Aptitude Test</h1>
        <div className="play-button-container">
          <ul>
            <li>
              <Link className="play-button" to="/play/instructions">
                Take Test
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </>
);

export default Home;
