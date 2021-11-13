import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'

const url = 'http://localhost:3004/Countries'
function App() {
  const [loading, setLoading] = useState(true)
  const [countries, setCountries] = useState([])
  const [value, setValue] = useState(0)

  const fetchCountries = async () => {
    const reponse = await fetch(url)
    const newCountries = await reponse.json()
    setCountries(newCountries)
    setLoading(false)
  }
  useEffect(() => {
    fetchCountries()
  }, [])
  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    )
  }
  const { Country,infos,Date } = countries[value]
  return (
    <section className="section">
      <div className="title">
        <h2>Covid Data Countries</h2>
        <div className="underline"></div>
      </div>
      <div className="countries-center">
        {/* btn container */}
        <div className="btn-container">
          {countries.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`country-btn ${index === value && 'active-btn'}`}
              >
                {item.Country}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="country-info">
          <h3>{Country}</h3>
          <p className="country-date">{Date}</p>
          {infos.map((infos, index) => {
            return (
              <div key={index} className="country-desc">
                <FaAngleDoubleRight className="country-icon"></FaAngleDoubleRight>
                <p>{infos}</p>
              </div>
            )
          })}
        </article>
      </div>
    </section>
  )
}

export default App
