import { useMemo } from 'react';
import { getHerosByPublisher } from '../../services/heroes.service'
import { HeroCardComponent } from '../hero-card/hero-card.component';

export const HeroListComponent = ({ publisher }) => {
  const heroesList = useMemo(() => {
    return getHerosByPublisher({ publisher });
  }, [publisher]);
  return (
    <div className='animate__animated animate__flipInX row row-cols-1 row-cols-md-3 g-3'>
      {
        heroesList.map( hero => (
          <HeroCardComponent key={ hero.id } {...hero}></HeroCardComponent>
        ))
      }
    </div>
  )
}
