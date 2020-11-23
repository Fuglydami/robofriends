import './index.css'
import { robots } from './robots'
import React, { useState } from 'react'
import Scrolls from './scrolls'

const App = () => {
  const [search, setSearch] = useState('')

  const filteredList = robots.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )
  const robotArray = filteredList.map((user, i) => {
    return (
      <Cards
        key={i}
        id={filteredList[i].id}
        name={filteredList[i].name}
        email={filteredList[i].email}
      />
    )
  })

  const searchCards = (e) => {
    setSearch(e.target.value)
  }

  return (
    <>
      <div className="tc">
        <h1 className="f2">Robofriends</h1>
        <div className="pa2">
          <input
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="search robot"
            value={search}
            onChange={searchCards}
          />
        </div>
      </div>
      <div className="tc">
        <Scrolls>{robotArray}</Scrolls>
      </div>
    </>
  )
}

const Cards = ({ email, name, id }) => {
  return (
    <>
      <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}`} alt="john doe" />
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </>
  )
}

export default App
