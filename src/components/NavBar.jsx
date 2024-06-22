'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
  return (
    <form className="flex justify-center my-3 h-[100%]">
      <input
        name="filter"
        id="filter"
        className="h-[1.7rem] sm:h-auto m-0 border-0 px-3 py-1 rounded-l-lg placeholder:text-sm sm:placeholder:text-[1rem] transition-transform duration-300 hover:shadow-inner hover:shadow-zinc-400"
        type="text"
        placeholder="Search by name"
      />
      <button
        className="text-white bg-zinc-700 border-0 m-0 mr-2 px-2 py-1 rounded-r-lg h-[1.7rem] sm:h-auto text-sm sm:text-lg pointer-events-auto transition-transform duration-300 hover:bg-zinc-600 hover:text-slate-200"
        type="submit"
      >
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  )
}

export default NavBar
