import React, { useContext, useEffect, useState } from 'react'
import data from './data.json'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [menu, setMenu] = useState(false)
  const [destination, setDestination] = useState(data.destinations)
  const [crew, setCrew] = useState(data.crew)
  const [technology, setTechnology] = useState(data.technology)
  const [currentDestination, setCurrentDestination] = useState(0)
  const [currentCrewMember, setCurrentCrewMember] = useState(0)
  const [currentTechnology, setCurrentTechnology] = useState(0)
  const [menuSection, setMenuSection] = useState('00 HOME')

  const activateMenu = (e) => {
    setMenu(true)
  }

  const closeMenu = () => {
    if (document.body.getBoundingClientRect().width > 600) {
      setMenu(true)
    } else {
      setMenu(false)
    }
  }

  const changeCurrentItem = (setCurrentItem, index) => {
    setCurrentItem(index)
  }

  const highlightCurrentSection = (e) => {
    const clickedMenuOption = e.target.innerText
    setMenuSection(clickedMenuOption)
  }

  useEffect(() => {
    if (document.body.getBoundingClientRect().width > 600) {
      setMenu(true)
    }
  }, [])

  return (
    <AppContext.Provider
      value={{
        menu,
        destination,
        crew,
        technology,
        currentDestination,
        currentCrewMember,
        currentTechnology,
        menuSection,
        activateMenu,
        closeMenu,
        setCurrentDestination,
        setCurrentCrewMember,
        setCurrentTechnology,
        changeCurrentItem,
        highlightCurrentSection,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
