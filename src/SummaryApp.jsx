import React from "react";
import { useSearchParams } from "react-router-dom";
import { useRecipiesCtx } from "./Context/RecipiesContext";

function SummaryApp() {
  const { recipes } = useRecipiesCtx();

  const [query, _] = useSearchParams();
  const selectedRecipe =
    recipes.length > 0 ? recipes[query.get("index")] : null;

  return (
    <div className="summaryContainer">
      {selectedRecipe && (
        <div className="summaryCard">
          <img
            src={selectedRecipe.image}
            className="summaryImg"
            alt="Recipie of the image"
          />
          <div className="summaryDetails">
            <h3 className="">{selectedRecipe.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }} />
            <br />
            <div className="instructionsCard">
              <h3>Instructions</h3>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: selectedRecipe.instructions }}
            />
            {selectedRecipe.analyzedInstructions.length > 0 && (
              <div className="analyzedInstructions">
                <div className="instructionsCard">
                  <h3>Steps</h3>
                </div>
                {selectedRecipe.analyzedInstructions[0].steps.map(
                  ({ number, step }) => (
                    <p key={number}> {`Step ${number} : ${step}`}</p>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SummaryApp;
