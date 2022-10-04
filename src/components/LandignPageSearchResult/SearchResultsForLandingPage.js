import React from 'react'
import { Link } from 'react-router-dom'
import { useData } from '../../context/dataContext';
import IconLocation from "../../assets/icons/location-icon.svg";
function SearchResultsForLandingPage() {
    const {searchResults} = useData();

  return (
    <section className="result-section">  
          <div className="result-item">
            {
                searchResults !== [] &&
              searchResults.slice(0,3).map((item, index) => {
                return (
                 <>
                  <div key={index} className="box">
                      <div className="icon-locaiton">
                        <img src={IconLocation}/>
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
                  <hr style={{width:"90%"}}></hr>
                 </>
                )
              })
            }
          </div>
          <Link to="/result" style={{textDecoration:'none',color:'inherit'}}>
          <div className="show-more">
            <b>Show more...</b>
          </div>
            </Link>
        </section>
  )
}

export default SearchResultsForLandingPage