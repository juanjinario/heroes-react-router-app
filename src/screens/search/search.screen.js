import { useNavigate, useLocation } from 'react-router-dom';
import { useMemo, useState } from 'react';
import queryString from 'query-string';
import { HeroCardComponent } from '../../components/hero-card/hero-card.component';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../services/heroes.service';

const SearchScreen = props => {

  const navigate = useNavigate();
  const location = useLocation();
  const { q: queryParam } = queryString.parse(location.search);
  const initialForm = {
    searchText: queryParam,
  };
  const [ formValues, handleInputChange ] = useForm(initialForm);
  const { searchText } = formValues;
  const heroesList = useMemo(() => getHeroesByName({ name: searchText }), [ queryParam ]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${ searchText }`);
  }

  return (
    <>
      <h1>Search hero</h1>
      <hr></hr>
      <div className='row'>
        <div className='col-5'>
          <h4>Search</h4>
          <form onSubmit={ handleSearch }>
            {/* The name have to be the same than value */}
            <input autoComplete='off' className='form-control' name='searchText' placeholder='Buscar un héroe' type="text" value={ searchText } onChange={ handleInputChange }></input>
            <button className='btn btn-outline-primary mt-3' type="submit">Buscar</button>
          </form>
        </div>
        <div className='col-7'>
          <h4>Resultados</h4>
          <hr></hr>
          {
            (!queryParam || queryParam === '')
              ? <div className='alert alert-info'>Search a Hero</div>
              : (heroesList.length === 0) && <div className='alert alert-danger'>No results</div>
          }
          {
            heroesList.map(hero => {
              return <HeroCardComponent className="animate__animated animate__fadeIn" key={ hero.id } { ...hero }></HeroCardComponent>
            })
          }
        </div>
      </div>
    </>
  )
}

SearchScreen.propTypes = {}

export default SearchScreen
