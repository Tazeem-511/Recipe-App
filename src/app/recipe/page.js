"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import "./list.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [calories, setCalories] = useState("");

  // Fetch recipes from API
  useEffect(() => {
    fetch("https://dummyjson.com/recipes")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.recipes || []);
        setFilteredRecipes(data.recipes || []);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle filter changes
  useEffect(() => {
    const handleFilterChange = () => {
      let filtered = recipes;

      // Apply search term filter
      if (searchTerm) {
        filtered = filtered.filter((recipe) =>
          recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Apply difficulty filter
      if (difficulty) {
        filtered = filtered.filter((recipe) => recipe.difficulty === difficulty);
      }

      // Apply cuisine filter
      if (cuisine) {
        filtered = filtered.filter((recipe) => recipe.cuisine === cuisine);
      }

      // Apply calories filter
      if (calories) {
        filtered = filtered.filter(
          (recipe) => recipe.caloriesPerServing <= parseInt(calories)
        );
      }

      setFilteredRecipes(filtered);
    };

    handleFilterChange();
  }, [recipes, searchTerm, difficulty, cuisine, calories]);

  return (
    <div className="recipe-container">
      <h1 className="title">🍴 Food Recipe App 🍲</h1>

      {/* Search Bar */}
      <div className="all-filters">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="filters">
          <label>
            Difficulty:
            <select
              onChange={(e) => setDifficulty(e.target.value)}
              value={difficulty}
            >
              <option value="">All</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </label>

          <label>
            Cuisine:
            <select onChange={(e) => setCuisine(e.target.value)} value={cuisine}>
              <option value="">All</option>
              <option value="Italian">Italian</option>
              <option value="Mexican">Mexican</option>
              <option value="Indian">Indian</option>
            </select>
          </label>

          <label>
            Max Calories:
            <input
              type="number"
              placeholder="Max calories"
              onChange={(e) => setCalories(e.target.value)}
              value={calories}
            />
          </label>
        </div>
      </div>

      <div className="recipe-list">
        {filteredRecipes.length === 0 ? (
          <p>No recipes found!</p>
        ) : (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <div className="card-content">
                <h2 className="recipe-name">{recipe.name}</h2>
                <p>
                  <strong>Difficulty:</strong> {recipe.difficulty}
                </p>
                <p>
                  <strong>Cuisine:</strong> {recipe.cuisine}
                </p>
                <p>
                  <strong>Calories per Serving:</strong>{" "}
                  {recipe.caloriesPerServing} kcal
                </p>

                <Link href={`/recipe/${recipe.id}`}>
                  <button className="view-more-btn">View More</button>
                </Link>
              </div>
              <div className="recipe-image-container">
                <Image
                  src={recipe.image || "/fallback-image.jpg"} // Fallback image
                  alt={`Image of ${recipe.name}`}
                  className="recipe-image"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RecipeList;
