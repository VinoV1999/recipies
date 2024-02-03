import { Link } from "react-router-dom";
import { useRecipiesCtx } from "../Context/RecipiesContext";


const RecipeCard = ({ id, title, imgurl , index, handFavClick }) => {
  const {favourite, updateFav} = useRecipiesCtx();
  const handFavouriteClick = () => {
    updateFav(id);
    handFavClick(id);
  }
  
  return (
    <div className="card" key={id}>
      <img src={imgurl} alt="Description of the image" className="card-image" />
      <div>
        <h3>{title}</h3>

        <span className="cardBtns" >
          <Link className="getdtlsbtn" to={`/details?index=${index}`} >Get Details</Link>
          <button onClick={handFavouriteClick}>{favourite.includes(id) ? 'Remove from Fav' : 'Add to Fav' }</button>
        </span>
      </div>
      
    
    </div>
  );
};

export default RecipeCard;