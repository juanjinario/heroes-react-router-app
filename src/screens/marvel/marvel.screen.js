import PropTypes from 'prop-types'
import { HeroListComponent } from '../../components/hero-list/hero-list.component';

const MarvelScreen = props => {

  const publisher = 'Marvel Comics';

  return (
    <>
      <h1>Héroes de Marvel</h1>
      <hr></hr>
      <HeroListComponent publisher={ publisher }></HeroListComponent>
    </>
  )
}

MarvelScreen.propTypes = {}

export default MarvelScreen
