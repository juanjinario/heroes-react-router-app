import { heroesData } from "../data/heroes.data"

const heroesList = heroesData;

export const getHeroeById = ({ heroId }) => {
  return heroesList.find(hero => hero.id === heroId);
}

export const getHeroesByPublisher = ({ publisher }) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${ publisher } is not a valid Publiser`);
  }
  return heroesList.filter(hero => hero.publisher.includes(publisher));
}
