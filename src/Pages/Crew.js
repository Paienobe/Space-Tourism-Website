import React from 'react'
import { useGlobalContext } from '../context'

const Crew = () => {
  const { crew, currentCrewMember, setCurrentCrewMember, changeCurrentItem } =
    useGlobalContext()
  return (
    <section className='crew'>
      <div className='crew-content'>
        <h5 className='intro crew-intro'>
          <span>02</span> MEET YOUR CREW
        </h5>
        <div className='main-crew-content'>
          <div className='crew-image'>
            <img
              src={crew[currentCrewMember].images.png}
              alt={crew[currentCrewMember].name}
              className='crew-member-image'
            />
            <hr />
          </div>

          <div className='crew-text'>
            <div className='crew-btn-holder'>
              {crew.map((crewMember, index) => {
                return (
                  <button
                    key={index}
                    className={`${
                      currentCrewMember === index
                        ? 'crew-btn active-btn'
                        : 'crew-btn'
                    }`}
                    onClick={() =>
                      changeCurrentItem(setCurrentCrewMember, index)
                    }
                  ></button>
                )
              })}
            </div>

            <div className='crew-details'>
              <h4 className='member-role'>
                {crew[currentCrewMember].role.toUpperCase()}
              </h4>
              <h3 className='member-name'>
                {crew[currentCrewMember].name.toUpperCase()}
              </h3>
              <p>{crew[currentCrewMember].bio}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Crew
