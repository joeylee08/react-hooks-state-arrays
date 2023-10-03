import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray =[...foods, newFood]
    setFoods(newFoodArray)
  }

  function removeFood(id) {
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

  const foodList = foods.map((food) => (
    <li key={food.id} onClick={() => upTheHeat(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
