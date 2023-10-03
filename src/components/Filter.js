import React from 'react';

function Filter({selectCuisine}) {
  return (
  <select onChange={selectCuisine} name="filter">
    <option value="All">All</option>
    <option value="American">American</option>
    <option value="Sichuan">Sichuan</option>
    <option value="Thai">Thai</option>
    <option value="Mexican">Mexican</option>
  </select>
  )
}

export default Filter