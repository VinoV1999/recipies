import { useContext, createContext, useState, useEffect } from "react";
import { sampleData } from "../Constants/constant";

const RecipiesContext = createContext();

export const RecipiesContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [favourite, setFavourite] = useState([]);

  const updateFavourites = (id) => {
    setFavourite(pre=>{
        if(pre.includes(id)) return pre.filter(item=> item != id)
        return [...pre, id]
    });
  }

  useEffect(() => {
    // var requestOptions = {
    //   method: "GET",
    //   redirect: "follow",
    // };

    // fetch(
    //   "https://api.spoonacular.com/recipes/random?apiKey=1fe5eaa4400242d893dd8b338f08f8e2&number=25",
    //   requestOptions
    // )
    //   .then((response) => {
    //     if (!response.code === 200) throw error({error:'Something went wrong'})
        
    //     return response.json();
    //   })
    //   .then((result) => {
    //     if(result?.recipes){
    //         setRecipes(result.recipes);
    //         setIsLoading(false);
    //         return;
    //     }
        
    //     throw error({error:'Something went wrong'})
    //   })
    //   .catch((error) => {
    //     console.group();
    //     console.log(
    //       "If incase of any issue with api, to make the app flaw less, have added used sample data"
    //     );
    //     console.error("Error fetching recipes:", error);
    //     console.groupEnd();
    //     setIsLoading(false);
    //     setRecipes(sampleData.recipes);
    //   });

    setIsLoading(false);
    setRecipes(sampleData.recipes);
  }, []);

  return (
    <RecipiesContext.Provider value={{ isLoading, recipes, favourite, updateFav: updateFavourites }}>
      {children}
    </RecipiesContext.Provider>
  );
};

export const useRecipiesCtx = () => {
  return useContext(RecipiesContext);
};
