import React from 'react'
import Logo from '../assets/Logo.svg'

import { useAppDispatch } from '../store/store'
import { setActiveForm } from '../store/slices/postSlice'

import '../styles/Header.module.scss'


const Header: React.FC = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(window.innerWidth <= 550);

  const dispatch = useAppDispatch()

  const openForm = () => {
    dispatch(setActiveForm(true))
  }

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 550);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <header>
      <img src={Logo} alt="Logo" />
      {isSmallScreen ? (
        <button onClick={openForm}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path opacity="0.16" d="M5 16L4 20L8 19L18 9L15 6L5 16Z" fill="white" />
            <path d="M5 16L4 20L8 19L19.5858 7.41421C20.3668 6.63316 20.3668 5.36683 19.5858 4.58579L19.4142 4.41421C18.6332 3.63316 17.3668 3.63317 16.5858 4.41421L5 16Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M15 6L18 9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M13 20H21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      ) : (
        <button onClick={openForm}>Написать</button>
      )}
    </header>
  )
}

export default Header