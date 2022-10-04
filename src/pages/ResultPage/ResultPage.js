import React from "react";
import Logo from "../../assets/icons/logo.svg";
import Buttons from "../../components/Buttons/Buttons";
import SearchBar from "../../components/SearchBar/SearchBar";
import IconLocation from "../../assets/icons/location-icon.svg";
import { useData } from "../../context/dataContext";
function ResultPage() {
  const { searchResults } = useData();
  return (
    <div className="container">
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="logo" width={150} />
        </div>
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className="add-button">
          <Buttons type="addPageLink">Add new record</Buttons>
        </div>
      </div>

      {
        searchResults && searchResults.map((item, index) => {
          return (
           <>
           <div className="result-container">
        <div className="result-item">
          <div className="left">
            <div className="image">
              <img src={IconLocation} />
            </div>
            <div className="result-item-info">
              <div className="result-item-info-city">
                <h3>{item[5]}</h3>
              </div>
              <div className="result-item-info-country">
                <h4>{item[4]}</h4>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="result-item-name">
              <h3>{[item[0]]}</h3>
            </div>
            <div className="result-item-date">
              <h4>{item[3]}</h4>
            </div>
          </div>
        </div>
      </div>

      <hr style={{ width: "47%" }}></hr>
           </>
          );
        })
      }
    </div>
  );
}

export default ResultPage;
