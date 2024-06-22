'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const LateralMenu = () => {
  return (
    <div className="flex flex-col justify-center items-center sticky top-24 h-[100vh]">
      <ul className="p-[0.175rem] sm:p-1 rounded-l-2xl bg-slate-400 bg-opacity-75 shadow-sm shadow-slate-700 pointer-events-auto transition-transform duration-300 hover:scale-105 hover:brightness-90 hover:shadow-sm hover:shadow-slate-800">
        <li className="m-1">
          <a href="https://github.com/Tutto2" target="_blank">
            <FontAwesomeIcon className="link-icon" icon={faGithub} />
          </a>
        </li>
        <li className="m-1">
          <a
            href="https://www.linkedin.com/in/carlos-augusto-herrera-orozco-2a7133281/"
            target="_blank"
          >
            <FontAwesomeIcon className="link-icon" icon={faLinkedin} />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default LateralMenu
