import { heroesData } from "../data/heroes.data"

const heroesList = heroesData;

export const getHeroById = ({ heroId }) => {
  console.log('get Hero ID');
  return heroesList.find(hero => hero.id === heroId);
}

export const getHerosByPublisher = ({ publisher }) => {
  const validPublishers = ['DC Comics', 'Marvel Comics'];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`${ publisher } is not a valid Publiser`);
  }
  return heroesList.filter(hero => hero.publisher.includes(publisher));
}
