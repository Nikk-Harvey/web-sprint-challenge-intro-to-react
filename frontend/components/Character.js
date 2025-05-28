import React from 'react'
import React, { useState } from 'react'

function Character() { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  // ❗ Create a "toggle" click handler to show or remove the homeworld

  const {character} = props
  const [showHomeworld, setShowHomeworld] = useState(false)
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }
  return (
    <div className="character-card" onClick={toggleHomeworld}>
      <h3 className="character-name">{character.name}</h3>
      <p>Born: {character.birth_year}</p>
      <p>ID: {character.id}</p>
      {showHomeworld && (
        <p className="character-planet">
        Homeworld: {character.homeworld.name}
        </p>
      )}
      
    </div>
  )
}

export default Character
