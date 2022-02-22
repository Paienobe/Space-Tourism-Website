import React from 'react'
import { useGlobalContext } from '../context'

const Destination = () => {
  const {
    destination,
    currentDestination,
    setCurrentDestination,
    changeCurrentItem,
  } = useGlobalContext()

  return (
    <section className='destination'>
      <div className='destination-content'>
        <h5 className='intro destination-intro'>
          <span>01</span> PICK YOUR DESTINATION
        </h5>

        <div className='main-destination-content'>
          <div className='destination-image-container'>
            <img
              src={destination[currentDestination].images.png}
              alt={destination[currentDestination].name}
              className='destination-image'
            />
          </div>
          <div className='destination-center'>
            <div className='destination-details'>
              <div className='locations'>
                {destination.map((location, index) => {
                  return (
                    <p
                      key={index}
                      onClick={() =>
                        changeCurrentItem(setCurrentDestination, index)
                      }
                      className={`${
                        currentDestination === index ? 'active-location' : ''
                      }`}
                    >
                      {location.name.toUpperCase()}
                    </p>
                  )
                })}
              </div>

              <div className='location-info'>
                <h2 className='location-name'>
                  {destination[currentDestination].name.toUpperCase()}
                </h2>
                <p>{destination[currentDestination].description}</p>
                <hr />
                <div className='distance-details'>
                  <div className='distance'>
                    <h6>AVG. DISTANCE</h6>
                    <h3>
                      {destination[currentDestination].distance.toUpperCase()}
                    </h3>
                  </div>

                  <div className='travel-time'>
                    <h6>EST. TRAVEL TIME</h6>
                    <h3>
                      {destination[currentDestination].travel.toUpperCase()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
