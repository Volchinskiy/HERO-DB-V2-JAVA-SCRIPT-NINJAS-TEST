import { useDispatch, useSelector } from 'react-redux';
import React from 'react';

import { toggleAddHeroArea } from './redux/action/uiAction';
import { getHero } from './redux/action/heroAction';
import { RootState } from './type/reduxType';
import { heroI } from './type/heroType';
import AddHeroArea from './component/AddHeroArea';
import Pagination from './component/Pagination';
import HeroItem from './component/HeroItem';

function App() {
  const dispatch = useDispatch();
  const { uiReducer, heroReducer } = useSelector((state: RootState) => state);
  const onAddHero = () => dispatch(toggleAddHeroArea);
  const isShowArea = uiReducer.showAddHeroArea;

  const [currentPage, setCurrentPage] = React.useState(1);
  const [heroesPrePage] = React.useState(5);

  React.useEffect(() => {
    dispatch(getHero);
  }, []);

  const lastHeroIndex = currentPage * heroesPrePage;
  const firstHeroIndex = lastHeroIndex - heroesPrePage;
  const currentHero = heroReducer.allHeroes.slice(firstHeroIndex, lastHeroIndex);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <header>HERO DATABASE</header>
      <div className="content">
        <div className={`hero-container ${isShowArea ? '--halfWidth' : ''}`}>
          {heroReducer.allHeroes.length
            ? currentHero.map((hero: heroI, index: number) => {
                return <HeroItem key={`${hero.id}_${index}`} {...hero} />;
              })
            : null}
        </div>
        <Pagination heroesPage={heroesPrePage} totalHeroes={heroReducer.allHeroes.length} paginate={paginate} />
        {isShowArea ? <AddHeroArea /> : null}
      </div>
      <button onClick={onAddHero} className="add-hero-btn">
        {isShowArea ? 'Back' : 'Add Hero'}
      </button>
    </>
  );
}

export default App;
