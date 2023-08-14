//import { useEffect, useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './main-page.css';
import Header from './header';
import FeaturedHouse from './featured-house';
import SearchResults from '../search-results';
import HouseFilter from './house-filter';
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouse';
import HousesContext from '../context/housesContext';

function App() {
  
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses)
 


  return (
    <HousesContext.Provider value={allHouses}>

   
    <Router>
      <div className="container">
        <Header subtitle="providing houses all over the world" title="some title" />
      </div>
      <HouseFilter />
      <Routes>
        <Route exact path='/searchresults/:country' element={<SearchResults />}></Route>
        <Route path='/house/:id' element={<HouseFromQuery  />}>
        </Route>
        <Route path='/' element={<FeaturedHouse house={featuredHouse} />}>
        </Route>
      </Routes>
      </Router>
    </HousesContext.Provider>

  );
}

export default App;
