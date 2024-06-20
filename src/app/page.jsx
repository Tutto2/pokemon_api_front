import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { bangersRegular } from '@/app/typography';
import TypeBtn from '@/components/TypeBtn'; 

export default function Home() {
  return (
    <div id="main-content">
      <header
        class="relative flex flex-col xs:flex-row justify-between items-center px-8 border-b-[0.12rem] bg-[#2e2e2e] z-20"
      >
        <div
          id="main-title"
          className={`text-slate-50 text-2xl transition-transform sm:tracking-wide sm:text-3xl cursor-pointer hover:text-slate-200 ${bangersRegular.className}`}
        >
          The Ultimate PokeAPI
        </div>

        <form class="flex justify-center my-3 h-[100%]">
          <input
            name="filter"
            id="filter"
            className="h-[1.7rem] sm:h-auto m-0 border-0 px-3 py-1 rounded-l-lg placeholder:text-sm sm:placeholder:text-[1rem] transition-transform duration-300 hover:shadow-inner hover:shadow-zinc-400"
            type="text"
            placeholder="Search by name"
          />
          <button
            class="text-white bg-zinc-700 border-0 m-0 mr-2 px-2 py-1 rounded-r-lg h-[1.7rem] sm:h-auto text-sm sm:text-lg pointer-events-auto transition-transform duration-300 hover:bg-zinc-600 hover:text-slate-200"
            type="submit"
          >
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </header>

      <main
        class="flex bg-pokeball bg-repeat before:fixed before:-top-[0.2rem] before:w-full before:h-full before:bg-white before:bg-opacity-40 before:z-0"
      >
        <div class="relative">
          <div
            id="sideMenu"
            class="flex flex-col justify-between sticky h-screen-short top-20 pb-4 px-5 mt-3 min-w-[9.2rem] max-w-44 h-auto gap-3 bg-[rgba(46,46,46)] shadow-md shadow-black rounded-r-md scrollbar-thin"
          >
            <div class="relative top-0 right-0">
              <img
                id="logo"
                class="w-[75%] absolute top-2 right-0 transition-transform cursor-pointer hover:scale-105"
                src="/images/logo.png"
                alt="Pokemon logo"
              />
            </div>
            <ul class="flex flex-col justify-center mt-10 ml-1 gap-1 sm:gap-[0.35rem]">
              <li class="badge bg-slate-100 justify-center items-center text-center" id="all-types">All Types</li>
              <li class="badge bg-normal" id="normal">
                <img
                  class="small-logo"
                  src="/images/Normal_Icon.png"
                />Normal
              </li>
              <TypeBtn name="Fire"/>
              <li class="badge bg-water text-white" id="water">
                <img
                  class="small-logo"
                  src="/images/Water_Icon.png"
                />Water
              </li>
              <li class="badge bg-grass" id="grass">
                <img
                  class="small-logo"
                  src="/images/Grass_Icon.png"
                />Grass
              </li>
              <li class="badge bg-electric" id="electric">
                <img
                  class="small-logo"
                  src="/images/Electric_Icon.png"
                />Electric
              </li>
              <li class="badge bg-ice" id="ice">
                <img class="small-logo" src="/images/Ice_Icon.png" />Ice
              </li>
              <li class="badge bg-fighting" id="fighting">
                <img
                  class="small-logo"
                  src="/images/Fighting_Icon.png"
                />Fighting
              </li>
              <li class="badge bg-poison" id="poison">
                <img
                  class="small-logo"
                  src="/images/Poison_Icon.png"
                />Poison
              </li>
              <li class="badge bg-ground" id="ground">
                <img
                  class="small-logo"
                  src="/images/Ground_Icon.png"
                />Ground
              </li>
              <li class="badge bg-flying" id="flying">
                <img
                  class="small-logo"
                  src="/images/Flying_Icon.png"
                />Flying
              </li>
              <li class="badge bg-psychic" id="psychic">
                <img
                  class="small-logo"
                  src="/images/Psychic_Icon.png"
                />Psychic
              </li>
              <li class="badge bg-bug" id="bug">
                <img class="small-logo" src="/images/Bug_Icon.png" />Bug
              </li>
              <li class="badge bg-rock" id="rock">
                <img
                  class="small-logo"
                  src="/images/Rock_Icon.png"
                />Rock
              </li>
              <li class="badge bg-ghost text-white" id="ghost">
                <img
                  class="small-logo"
                  src="/images/Ghost_Icon.png"
                />Ghost
              </li>
              <li class="badge bg-dragon text-white" id="dragon">
                <img
                  class="small-logo"
                  src="/images/Dragon_Icon.png"
                />Dragon
              </li>
              <li class="badge bg-dark text-white" id="dark">
                <img
                  class="small-logo"
                  src="/images/Dark_Icon.png"
                />Dark
              </li>
              <li class="badge bg-steel" id="steel">
                <img
                  class="small-logo"
                  src="/images/Steel_Icon.png"
                />Steel
              </li>
              <li class="badge bg-fairy" id="fairy">
                <img
                  class="small-logo"
                  src="/images/Fairy_Icon.png"
                />Fairy
              </li>
            </ul>
          </div>

          <button
            id="menuBtn"
            class="fixed top-20 text:lg sm:text-2xl py-2 pr-[0.37rem] pl-1 sm:p-2 small-hamburger bg-[rgba(46,46,46)] bg-opacity-85 text-white rounded-r-lg hover:bg-slate-700 focus:outline-none"
          >
            ☰
          </button>
        </div>

        <div
          class="flex justify-center flex-wrap flex-1 ml-1 p-4 gap-4 max-w[88rem]"
          id="pokemon-list"
        ></div>

        <div
          class="flex flex-col justify-center items-center sticky top-24 h-[100vh]"
        >
          <ul
            class="p-[0.175rem] sm:p-1 rounded-l-2xl bg-slate-400 bg-opacity-75 shadow-sm shadow-slate-700 pointer-events-auto transition-transform duration-300 hover:scale-105 hover:brightness-90 hover:shadow-sm hover:shadow-slate-800"
          >
            <li class="m-1">
              <a href="https://github.com/Tutto2" target="_blank">
                <FontAwesomeIcon className="link-icon" icon={faGithub} />
              </a>
            </li>
            <li class="m-1">
              <a
                href="https://www.linkedin.com/in/carlos-augusto-herrera-orozco-2a7133281/"
                target="_blank"
              >
                <FontAwesomeIcon className="link-icon" icon={faLinkedin} />
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
