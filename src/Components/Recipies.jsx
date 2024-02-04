import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useRecipiesCtx } from "../Context/RecipiesContext";
import SummaryApp from "../SummaryApp";
import SearchBar from "./SearchBar";
import RecipeCard from "./RecipeCard";

function Recipies() {
  const { isLoading, recipes, favourite } = useRecipiesCtx();
  const [showFav, setShowFav] = useState(false);
  const [sortedRecipes, setSortedRecipes] = useState([]);
  useEffect(()=>{
    setSortedRecipes(showFav?recipes.filter(item=> {
      return favourite.find(favItem => favItem === item.id)
    }):recipes)
  },[recipes.length, showFav])

  const sortRecipes = (value) => {
    if (!isLoading) {
      if (value === "") {
        setSortedRecipes(recipes);
        setValue(value);
        return;
      }
      setSortedRecipes(
        recipes.filter((item) =>
          item.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    }
  };
  const handleFavClick = (id) =>{
    if(showFav)
      setSortedRecipes(pre => pre.filter(item => item.id != id))
  }

  const noFav = {
      "padding": "5px 15px",
      "outline": "black 1px",
      "border": "solid black",
      "border-radius": "20px",
  }

  const fav = {
    "padding": "5px 15px",
    "outline": "white 1px",
    "border": "solid black",
    "border-radius": "20px",
    "background-color": "#67AFCB"
}

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <SearchBar sortRecipes={sortRecipes} />
              <div className="filterContainer">
                Filter : <span className="filterBtn" style={showFav?fav:noFav} onClick={()=>{setShowFav(pre=>!pre)}}>{'Show Favourites'}</span>
              </div>
              <div className="recipes" id="recipeID">
                {Array.isArray(sortedRecipes) && sortedRecipes.length > 0 ? (
                  sortedRecipes.map(({id, title, image}, index ) => {
                    return(
                    <RecipeCard
                    id={id}
                    title={title}
                    imgurl={image}
                    index={index}
                    handFavClick={handleFavClick}
                  />
                  )
                    })
                ) : <div className="hint"><h3> { showFav ? 'No Favourite Recipies!' :'No Recipies Found!'}</h3></div>}
              </div>
            </div>
          }
        ></Route>

        <Route path="/details" element={<SummaryApp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Recipies;
