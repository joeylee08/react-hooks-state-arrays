import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";
import Filter from './Filter.js';

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [selected, setSelect] = useState("All");

  function selectCuisine(event) {
    const cuisine = event.target.value;
    setSelect(cuisine)
  }

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray =[...foods, newFood]
    setFoods(newFoodArray)
  }

  function removeFood(event, id) {
    event.preventDefault()
    const filtered = foods.filter(item => item.id !== id)
    setFoods(filtered)
  }

  function upTheHeat(id) {
    const newFoodArray = foods.map(food => {
      if (food.id === id) return {...food, heatLevel: food.heatLevel + 1}
      else return {...food}
    })
    setFoods(newFoodArray)
  }

  const filtered = foods.filter((item) => {
    if (selected === "All") return true;
    return item.cuisine === selected;
  })

  const foodList = filtered.map((food) => (
    <li key={food.id} onContextMenu={(event) => removeFood(event, food.id)} onClick={() => upTheHeat(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  

  return (
    <div>
      <Filter selectCuisine={selectCuisine}/>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
