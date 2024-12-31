"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./detail.css"

const RecipeDetails = ({ params }) => {
  const { id } = params; // Get ID from URL
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`https://dummyjson.com/recipes/${id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Recipe Data:", data); // Debug API response
          setRecipe(data);
        })
        .catch((error) => console.error("Error fetching recipe details:", error));
    }
  }, [id]);

  if (!recipe) return <p>Loading recipe details...</p>;

  // Debugging: Check if ingredients are present
  console.log("Ingredients Data:", recipe.ingredients);

  return (
    <div className="recipe-detail-container">
      <h1 className="title">{recipe.name}</h1>
      <div className="recipe-detail">
        <div className="recipe-image-container">
          <Image
            src={recipe.image}
            alt={recipe.name}
            className="recipe-image"
            width={400}
            height={300}
          />
        </div>
        <div className="recipe-info">
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Calories per Serving:</strong> {recipe.caloriesPerServing || "N/A"} kcal</p>
          <p><strong>Serving Size:</strong> {recipe.servingSize || "N/A"} people</p>
          <p><strong>Preparation Time:</strong> {recipe.preparationTime || "N/A"} minutes</p>
          <p><strong>Cooking Time:</strong> {recipe.cookingTime || "N/A"} minutes</p>

          <h3>Ingredients:</h3>
          {recipe.ingredients && recipe.ingredients.length > 0 ? (
            <ul>
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          ) : (
            <p>No ingredients available</p>
          )}

          <h3>Instructions:</h3>
          <ol>
            {recipe.instructions?.length > 0 ? (
              recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))
            ) : (
              <li>No instructions available</li>
            )}
          </ol>

          <h3>Nutritional Information:</h3>
          {recipe.nutritionalInfo ? (
            <ul>
              <li><strong>Protein:</strong> {recipe.nutritionalInfo.protein || "N/A"}</li>
              <li><strong>Carbohydrates:</strong> {recipe.nutritionalInfo.carbohydrates || "N/A"}</li>
              <li><strong>Fat:</strong> {recipe.nutritionalInfo.fat || "N/A"}</li>
            </ul>
          ) : (
            <p>No nutritional information available</p>
          )}

          <h3>Tags:</h3>
          <div className="tags">
            {recipe.tags?.length > 0 ? (
              recipe.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))
            ) : (
              <p>No tags available</p>
            )}
          </div>

          <p><strong>Ratings:</strong> {recipe.ratings || "N/A"} / 5</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
