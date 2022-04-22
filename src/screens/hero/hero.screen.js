import { useParams, Navigate } from "react-router-dom";
import { getHeroById } from "../../services/heroes.service";
import { useNavigate } from 'react-router-dom';
import { useMemo } from "react";

export const HeroScreen = () => {

  const navigate = useNavigate();
  const params = useParams();
  const { heroId } = params;

  const hero = useMemo(() => {
    return getHeroById({ heroId });
  }, [ heroId ]);

  if (!hero) {
    // You can return navigate component
    // return <Navigate to="/"></Navigate>
    return <p>No hay héroe</p>;
  }
  const {
    id,
    alter_ego,
    characters,
    first_appearance,
    publisher,
    superhero
  } = hero;
  const imgPath = `/assets/img/heroes/${ id }.jpg`;

  const handleReturn = () => {
    // Return to back
    navigate(-1);
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img alt={ superhero } className="animate__animated animate__fadeInLeft img-thumbnail" src={ imgPath }></img>
      </div>
      <div className="col-8">
        <h3>{ superhero }</h3>
        <ul className="list-group">
          <li className="list-group-item">
            <b>Alter ego:</b><span>{ alter_ego }</span>
          </li>
          <li className="list-group-item">
            <b>Publisher:</b><span>{ publisher }</span>
          </li>
          <li className="list-group-item">
            <b>First Appearance:</b><span>{ first_appearance }</span>
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{ characters }</p>

        <button className="btn btn-outline-info" onClick={ handleReturn }>Return</button>
      </div>
    </div>
  )
}
