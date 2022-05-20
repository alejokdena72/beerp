import React from "react";

function Search({searchValue, setSearchValue}){

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
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