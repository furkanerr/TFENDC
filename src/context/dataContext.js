import React, { createContext, useContext, useEffect, useState } from "react";
import appData from "../data/data.js";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offSet, setOffSet] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(searchResults.length);
  const [paginationData, setPaginationData] = useState([]);
  const [orderType, setOrderType] = useState("");
  const handleNextIcon = () => {
    // handle next icon click

    setCurrentPage(currentPage + 1);
    setOffSet(offSet + 5);
  };
  const handlePreviousIcon = () => {
    // handle previous icon click
    setCurrentPage(currentPage - 1);
    setOffSet(offSet - 5);
  };
  const handleNext = (Event) => {
    // handle next click
    Event.preventDefault(); // prevent default behaviour
    let targetPage = Event.target.innerHTML; // get target page number
    setCurrentPage(parseInt(targetPage)); // set current page to target page
    setOffSet((targetPage - 1) * 5); // calculate offset
  };

  const handlePrevious = (Event) => {
    Event.preventDefault();
    let targetPage = Event.target.innerHTML;
    setCurrentPage(parseInt(targetPage));
    setOffSet((targetPage - 1) * 5);
  };
  useEffect(() => {
    setPaginationData(searchResults.slice(offSet, offSet + 5));
  }, [searchResults, currentPage, searchTerm, offSet, orderType]);

  useEffect(() => {
    if (localStorage.getItem("data") === null) {
      localStorage.setItem("data", JSON.stringify(appData));
    } else {
      let localData = JSON.parse(localStorage.getItem("data"));
      setData(localData);
    }
  }, []);

  const addToData = (data) => {
    let localData = JSON.parse(localStorage.getItem("data"));
    localData.push(data);
    localStorage.setItem("data", JSON.stringify(localData));
    setData(localData);
  };
  const orderDataByNameAsc = (item) => {
    item.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
    let localData = JSON.parse(localStorage.getItem("data"));
    localData.sort((a, b) => {
      if (a[0] < b[0]) {
        return -1;
      }
      if (a[0] > b[0]) {
        return 1;
      }
      return 0;
    });
    localStorage.setItem("data", JSON.stringify(localData));

    setSearchResults(item);
  };
  const orderDataByNameDesc = (item) => {
    item.sort((a, b) => {
      if (a[0] > b[0]) {
        return -1;
      }
      if (a[0] < b[0]) {
        return 1;
      }
      return 0;
    });
    let localData = JSON.parse(localStorage.getItem("data"));
    localData.sort((a, b) => {
      if (a[0] > b[0]) {
        return -1;
      }
      if (a[0] < b[0]) {
        return 1;
      }
      return 0;
    });
    localStorage.setItem("data", JSON.stringify(localData));

    setSearchResults(item);
  };
  const orderDataByDateAsc = (item) => {
    item.sort((a, b) => {
      if (a[3].split("/")[2] !== b[3].split("/")[2]) {
        return b[3].split("/")[2] - a[3].split("/")[2];
      }
      if(a[3].split("/")[1] !== b[3].split("/")[1]){
        return b[3].split("/")[1]-a[3].split("/")[1];
      }
      return b[3].split("/")[0]-a[3].split("/")[0];
      
    });
    let localData = JSON.parse(localStorage.getItem("data"));
    localData.sort((a, b) => {
      if (a[3].split("/")[2] !== b[3].split("/")[2]) {
        return b[3].split("/")[2] - a[3].split("/")[2];
      }
      if(a[3].split("/")[1] !== b[3].split("/")[1]){
        return b[3].split("/")[1]-a[3].split("/")[1];
      }
      return b[3].split("/")[0]-a[3].split("/")[0];
  
    });
    localStorage.setItem("data", JSON.stringify(localData));
    setSearchResults(item);
  };
  const orderDataByDateDesc = (item) => {
    item.sort((a, b) => {
      if (b[3].split("/")[2] !== a[3].split("/")[2]) {
        return a[3].split("/")[2] - b[3].split("/")[2];
      }

      if (a[3].split("/")[1] !== b[3].split("/")[1]) {
        return a[3].split("/")[1] -b[3].split("/")[1];
      }
      return a[3].split("/")[0] - b[3].split("/")[0];
     
    });
    let localData = JSON.parse(localStorage.getItem("data"));
    localData.sort((a, b) => {
      if (b[3].split("/")[2] !== a[3].split("/")[2]) {
        return a[3].split("/")[2] - b[3].split("/")[2];
      }

      if (a[3].split("/")[1] !== b[3].split("/")[1]) {
        return a[3].split("/")[1] -b[3].split("/")[1];
      }
      return a[3].split("/")[0] - b[3].split("/")[0];
      
    });
    localStorage.setItem("data", JSON.stringify(localData));

    setSearchResults(item);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  useEffect(() => {
    if (orderType == "Name Ascending") {
      orderDataByNameAsc(searchResults);
    }
    if (orderType == "Name Descending") {
      orderDataByNameDesc(searchResults);
    }
    if (orderType == "Date Ascending") {
      orderDataByDateAsc(searchResults);
    }
    if (orderType == "Date Descending") {
      orderDataByDateDesc(searchResults);
    }
    console.log(orderType);
  }, [orderType]);
  useEffect(() => {
    const results = data.filter((person) =>
      searchTerm == ""
        ? []
        : person[0].toLowerCase().includes(searchTerm.toLowerCase())
    );
    setItemQuantity(results.length);
    setSearchResults(results);
    console.log(searchTerm);
  }, [searchTerm]);

  const values = {
    data,
    setData,
    addToData,
    orderDataByNameAsc,
    orderDataByNameDesc,
    orderDataByDateAsc,
    orderDataByDateDesc,
    searchTerm,
    setSearchTerm,
    searchResults,
    setSearchResults,
    handleSearchChange,
    handlePrevious,
    handleNext,
    handleNextIcon,
    handlePreviousIcon,
    currentPage,
    offSet,
    itemQuantity,
    paginationData,
    setOrderType,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);
export { DataProvider, useData };
