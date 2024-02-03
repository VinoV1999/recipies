import "./App.css";
import { RecipiesContextProvider } from "./Context/RecipiesContext";

import Recipies from "./components/Recipies";

function App() {
  return (
    <RecipiesContextProvider>
      <div className="parentContainer">
        <h2 className="logo">Recipee!!</h2>
        <Recipies />
      </div>
    </RecipiesContextProvider>
  );
}

export default App;
