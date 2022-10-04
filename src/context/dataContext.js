import React, { createContext, useContext, useEffect, useState } from "react";
import appData from '../data/data.js';

export const DataContext = createContext();


 const DataProvider = ({ children }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('data') === null) {
        localStorage.setItem('data', JSON.stringify(appData));
        } else {
        let localData = JSON.parse(localStorage.getItem('data'));
        setData(localData);
        }
    }, []);

    const addToData = (data) => {
        let localData = JSON.parse(localStorage.getItem('data'));
        localData.push(data);
        localStorage.setItem('data', JSON.stringify(localData));
        setData(localData);

    }
    const orderDataByNameAsc = () => {
        let localData = JSON.parse(localStorage.getItem('data'));
        localData.sort((a, b) => {
            if(a[0] < b[0]) { return -1; }
            if(a[0] > b[0]) { return 1; }
            return 0;
        });
        localStorage.setItem('data', JSON.stringify(localData));
        setData(localData);
    }
    const orderDataByNameDesc = () => {
        let localData = JSON.parse(localStorage.getItem('data'));
        localData.sort((a, b) => {  
            if(a[0] > b[0]) { return -1; }
            if(a[0] < b[0]) { return 1; }
            return 0;
        });
        localStorage.setItem('data', JSON.stringify(localData));
        setData(localData);
    }
    const orderDataByDateAsc = () => {
        let localData = JSON.parse(localStorage.getItem('data'));
        localData.sort((a, b) => {
            if(a[3] < b[3]) { return -1; }
            if(a[3] > b[3]) { return 1; }
            return 0;
        });

        localStorage.setItem('data', JSON.stringify(localData));
        setData(localData);
    }
    const orderDataByDateDesc = () => {
        let localData = JSON.parse(localStorage.getItem('data'));
        localData.sort((a, b) => {
            if(a[3] > b[3]) { return -1; }

            if(a[3] < b[3]) { return 1; }
            return 0;
        });
        localStorage.setItem('data', JSON.stringify(localData));
        setData(localData);
    }

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    };
    useEffect(() => {
        const results = data.filter(person =>
            person[0].toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
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
        handleSearchChange
    }

    return (
        <DataContext.Provider value={values}>
            {children}
        </DataContext.Provider>
    );
};




const useData = () => useContext(DataContext);
export { DataProvider, useData };
