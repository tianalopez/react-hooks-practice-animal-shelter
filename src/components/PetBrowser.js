import React from "react";

import Pet from "./Pet";


function PetBrowser({pets, onAdoptPet}) {
  const renderPet = pets.map((pet) => (
    <Pet key={pet.id} onAdoptPet={onAdoptPet} pet={pet}/>
  ))
  return <div className="ui cards">{renderPet}</div>;
}

export default PetBrowser;
