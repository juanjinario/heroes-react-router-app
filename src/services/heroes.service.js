import { heroesData } from "../data/heroes.data"

const heroesList = heroesData;

export const getHeroById = ({ heroId }) => {
  return heroesList.find(hero => hero.id === heroId);
}

export const getHeroesByName = ({ name = '' }) => {
  if (name === '') {
    return [];
  }
  name = name.toLocaleLowerCase();
  return heroesList.filter( hero => hero.superhero.toLocaleLowerCase().includes(name));
}

export const getHerosByPublisher = ({ publisher }) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${ publisher } is not a valid Publiser`);
  }
  return heroesList.filter(hero => hero.publisher.includes(publisher));
}
