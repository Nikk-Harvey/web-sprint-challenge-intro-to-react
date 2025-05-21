import React from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  // ❗ Create effects to fetch the data and put it in state

   const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const [peopleRes, planetsRes] = await Promise.all([
          axios.get(urlPeople),
          axios.get(urlPlanets),
        ])

        const people = peopleRes.data;
        const planets = planetsRes.data;

        const planetMap = {}
        planets.forEach(planet => {
          planetMap[planet.id] = planet
        });

        const mergedData = people.map(person => ({
          ...person,
          homeworld: planetMap[person.homeworld],
        }))

        setCharacters(mergedData)
        setLoading(false)
      } catch (err) {
        console.log('Failed to fetch data:', err)
      }
    }
    fetchData()
  }, [])
  
  return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}
      {loading ? (
        <p>Loading Characters...</p>
      ) : (
        characters.map(char => (
          <Character key={char.id} character={char} />
        ))
      )}
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
