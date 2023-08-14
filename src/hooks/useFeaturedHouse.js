import { useMemo } from 'react'
import useHouses from './useHouses';

const useFeaturedHouse = (allHouses) => {
  //const allHouses = useHouses()
  const featuredHouse = useMemo(() => {
    if (allHouses.length) {
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
    }

  }, [allHouses])
  return featuredHouse;
}

export default useFeaturedHouse
