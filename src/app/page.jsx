import Header from '@/components/Header';
import SideFilters from '@/components/SideFilters';
import MainContent from '@/components/MainContent';
import LateralMenu from '@/components/LateralMenu';

const Home = () => {
  return (
    <div id="main-content">
      <Header />
      <main className="flex bg-pokeball bg-repeat before:fixed before:-top-[0.2rem] before:w-full before:h-full before:bg-white before:bg-opacity-40 before:z-0">
        <SideFilters/>
        <MainContent/>
        <LateralMenu/>
      </main>
    </div>
  );
}

export default Home
