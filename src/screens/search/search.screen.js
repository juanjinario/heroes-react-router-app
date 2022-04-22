import PropTypes from 'prop-types'
import { useForm } from '../../hooks/useForm';

const SearchScreen = props => {

  const initialForm = {
    searchText: '',
  };
  const [ formValues, handleInputChange ] = useForm(initialForm);
  const { searchText } = formValues;

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
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
      </div>
    </>
  )
}

SearchScreen.propTypes = {}

export default SearchScreen
