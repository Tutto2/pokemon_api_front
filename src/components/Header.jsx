// 'use client'
import { bangersRegular } from '@/app/typography';
import NavBar from '@/components/NavBar';

const Header = () => {
  return (
    <header className="relative flex flex-col xs:flex-row justify-between items-center px-8 border-b-[0.12rem] bg-[#2e2e2e] z-20">
      <div
        id="main-title"
        className={`text-slate-50 text-2xl transition-transform sm:tracking-wide sm:text-3xl cursor-pointer hover:text-slate-200 ${bangersRegular.className}`}
      >
        The Ultimate PokeAPI
      </div>

      <NavBar/>
    </header>
  )
}

export default Header
