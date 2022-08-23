import { useState, useEffect } from 'react'
import axios from 'axios'
import LocationInfo from './components/LocationInfo'
import CardResident from './components/CardResident'
import './App.css'

function App() {

  const [location, setLocation] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {

    let numberLocation
    if(searchInput === ''){
      numberLocation =  Math.floor(Math.random()*(126-1)+1)      
    }
    else{
      numberLocation = searchInput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`

    axios.get(URL)
    .then(res => setLocation(res.data))
    .catch(err => console.log(err))

  }, [searchInput])

  const handleSubmit = e => {
    e.preventDefault()
    setSearchInput(e.target.search.value)   
  }

  return (
    <div className="App">
      <div className='head__img'></div>
      <h1>"Rick and Morty"</h1>
      <form className='form' onSubmit={handleSubmit} >
        <input className='form__input' id='search' type="text" placeholder='# World Number #'/>
        <button className='form__button'>Search</button>
      </form>
      <LocationInfo location={location}/>
      <div>
        {
          location?.residents.map( url => (
            <CardResident
              key = {url}
              url = {url}  
             />
          ))
        }
      </div>
    </div>
  )
}

export default App
