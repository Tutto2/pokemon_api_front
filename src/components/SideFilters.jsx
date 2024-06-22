'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import TypeBtn from '@/components/TypeBtn';

const TYPES = [
  "Normal",
  "Fire",
  "Water",
  "Grass",
  "Electric",
  "Ice",
  "Fighting",
  "Poison",
  "Ground",
  "Flying",
  "Psychic",
  "Bug",
  "Rock",
  "Ghost",
  "Dragon",
  "Dark",
  "Steel",
  "Fairy"
]

const SideFilters = () => {
  const [showMenu, setShowMenu] = useState(false)

  return(
    <div className="relative">
      { showMenu &&
        <div
          id="sideMenu"
          className="flex flex-col justify-between sticky h-screen-short top-20 pb-4 px-5 mt-3 min-w-[9.2rem] max-w-44 h-auto gap-3 bg-[rgba(46,46,46)] shadow-md shadow-black rounded-r-md scrollbar-thin"
        >
          <div className="relative top-0 right-0">
            <img
              id="logo"
              className="w-[75%] absolute top-2 right-0 transition-transform cursor-pointer hover:scale-105"
              src="/images/logo.png"
              alt="Pokemon logo"
            />
          </div>
          <ul className="flex flex-col justify-center mt-10 ml-1 gap-1 sm:gap-[0.35rem]">
            <TypeBtn name="All Types"/>
            {
              TYPES.map((type, index) => <TypeBtn key={index} logo name={type}/>)
            }
          </ul>
        </div>
      }

      <button
        id="menuBtn"
        className="fixed top-20 text:lg sm:text-2xl py-2 pr-[0.37rem] pl-1 sm:p-2 small-hamburger bg-[rgba(46,46,46)] bg-opacity-85 text-white rounded-r-lg hover:bg-slate-700 focus:outline-none"
        onClick={ () => setShowMenu((prevState) => !prevState)}
      >
        <FontAwesomeIcon icon={faBars}/>
      </button>
    </div>
  )
}


export default SideFilters
