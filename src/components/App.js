import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  const [adoptedPet, setAdoptedPet] = useState(false)

  //change selection for filter
  const onChangeType = (selectionValue) => {
    setFilters((filter) => selectionValue)
  }
  //find pets clicked
  const onFindPetsClick = () => {
    let URL = "";
    if (filters === "micropig") {
      URL = "http://localhost:3001/pets?type=micropig"
    }
    else if (filters === 'cat') {
      URL = "http://localhost:3001/pets?type=cat"
    }
    else if (filters === "dog") {
      URL = "http://localhost:3001/pets?type=dog"
    }
    else {
      URL = "http://localhost:3001/pets"
    }

    fetch(URL)
    .then(r=> r.json())
    .then(setPets)
  }

  const onAdoptPet = (id) => {
    // fetch(`http://localhost:3001/pets/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type" : "application/json",
    //     "Accept": "application/json"
    //   },
    //   body: JSON.stringify({isAdopted: true})
    // })
    // .then(r => r.json())
    // .then((petObj) => {
    //   const newArray = pets.map((pet) => {
    //     if (pet.id === petObj.id) {
    //       console.log("match")
    //       return petObj
    //     }
    //     else {
    //       console.log("no match")
    //       return pet
    //     }
    //   })
    //   setPets((pets) => newArray)
    // })


    const newArray = pets.map((pet) => {
      if (pet.id === id) {
        pet.isAdopted = true
        return pet
      }
      else {
        return pet
      }
  })
    console.log(newArray)
    setPets((pets) => newArray)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={onChangeType} onFindPetsClick={onFindPetsClick}/>
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={onAdoptPet}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
