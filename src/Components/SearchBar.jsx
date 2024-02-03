import React, { useState } from "react";


const SearchBar = ({sortRecipes, preValue}) => {
const [value, setValue] = useState(preValue);
  function handleOnChange(e){
            setValue(e.target.value);
  }
  const handleSubmit = event =>{
    event.preventDefault()
    sortRecipes(value)
   
   };
    return (

           <form
              className="searchBar"
           onSubmit={handleSubmit}>
           <input value={value}  
           onChange={handleOnChange}
            placeholder="search Recipes"
            className="form-control"/>

            <input type="submit" 
            className="btn" 
            value="Search"/>
           </form>

    )
};

export default SearchBar