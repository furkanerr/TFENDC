import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import News from "../../components/News/News";
// import "../../styles/Pages/LandingPage/landingPage.scss";
import "../../styles/index.scss";
import Logo from "../../assets/icons/logo.svg";
import Buttons from "../../components/Buttons/Buttons";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useData } from "../../context/dataContext";

import SearchResultsForLandingPage from "../../components/LandignPageSearchResult/SearchResultsForLandingPage";
function LandingPage() {
  const {searchResults} = useData();

  return (
    <div className="landing-page-container">
        <Buttons type={'addPageLink'}>Add new record</Buttons>
      <div>
        <div className="logo">
          <img src={Logo} alt="logo" />
        </div>
        <section className="search-section">
            <SearchBar/>
        </section>
       {
        searchResults &&(
          <SearchResultsForLandingPage searchResults={searchResults}/>
        )
       }
        <section className="news-section">
          <News />
        </section>
        <section className="footer-section">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
