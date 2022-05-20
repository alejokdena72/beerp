import React from "react";

function Search({searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };

    return(
        <input
         className="searchTable" 
         placeholder="Escribe aquí"
         value={searchValue}
         onChange={onSearchValueChange}
         />
    );
}

export { Search };