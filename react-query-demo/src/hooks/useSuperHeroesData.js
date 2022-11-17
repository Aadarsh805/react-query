import axios from "axios";
import { useQuery } from "react-query";

const fetchSuperHeroes = (onSuccess, onError) => {
  return axios.get("http://localhost:4000/superheroes");
};

export const useSuperHeroesData = () => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000
    // staleTime: 30000,
    // refetchOnMount: true,
    // refetchOnWindowFocus: 'always'
    // refetchInterval: 2000,
    // refetchINtervalInBackground: true
    // enabled: false, // disable fetching on mount
    onSuccess,
    onError,
    // select: (data) => {
    //   const superHeroNames = data.data.map((hero) => hero.name);
    //   return superHeroNames;
    // },

    
  });
};
